import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"; // Use react-router-dom for Link
import { toast, ToastContainer } from "react-toastify";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider";
import DynamicTitle from "../../Components/DynamicTitle";
import { FaGoogle } from "react-icons/fa";

const Register = () => {
  let [nameError, setNameError] = useState("");
  let [passwordError, setPasswordError] = useState("");
  let { createUser, user, setUser, updateUser, googleLogin } = use(AuthContext);
  let navigate = useNavigate();
  let location = useLocation();

  let handleSubmit = (e) => {
    e.preventDefault();
    let name = e.target.name.value;
    let photo = e.target.photo.value;
    let email = e.target.email.value;
    let password = e.target.password.value;
    console.log({ name, photo, email, password });

    if (name.length < 5) {
      setNameError("Name should be more then 5 charecter");
      toast("Name should be more then 5 charecter");
      return;
    } else {
      setNameError("");
    }
    if (!/(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(password)) {
      setPasswordError(
        "Password must contain at least 6 characters, one uppercase, one lowercase"
      );
      toast(
        "Password must contain at least 6 characters, one uppercase, one lowercase"
      );
      return;
    } else {
      setPasswordError("");
    }
    createUser(email, password)
      .then((result) => {
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            Swal.fire({
              icon: "success",
              title: "Thanks, Your SignUp Complete",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate(`${location.state ? location.state : "/"}`);
          })
          .catch((error) => {
            setUser(user);
          });
      })
      .catch((error) => {});
  };

  let handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        navigate(`${location.state ? location.state : "/"}`);
        Swal.fire({
          icon: "success",
          title: "Register with Google sucessfully Complete",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {});
  };

  return (
    <>
      <DynamicTitle title="Register"></DynamicTitle>
      <div className="flex justify-center items-center min-h-[calc(100vh-100px)] p-4 ">
        <div className="w-full max-w-[600px] bg-white text-gray-900 rounded-3xl shadow-xl p-8 transform transition-transform duration-500 ">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-extrabold text-gray-800">
              Please Register
            </h1>
          </div>
          <div className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xl font-semibold mb-2 text-gray-700">Name</label>
                <input
                  name="name"
                  type="text"
                  className="w-full px-4 py-3 bg-gray-50 text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors"
                  placeholder="Your Name"
                  required
                />
                {nameError && <p className="text-red-600 text-sm mt-2">{nameError}</p>}
              </div>
              <div>
                <label className="block text-xl font-semibold mb-2 text-gray-700">Photo URL</label>
                <input
                  name="photo"
                  type="text"
                  className="w-full px-4 py-3 bg-gray-50 text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors"
                  placeholder="Provide Photo URL"
                  required
                />
              </div>
              <div>
                <label className="block text-xl font-semibold mb-2 text-gray-700">Email</label>
                <input
                  name="email"
                  type="email"
                  className="w-full px-4 py-3 bg-gray-50 text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors"
                  placeholder="Your email address"
                  required
                />
              </div>
              <div>
                <label className="block text-xl font-semibold mb-2 text-gray-700">Password</label>
                <input
                  name="password"
                  type="password"
                  className="w-full px-4 py-3 bg-gray-50 text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors"
                  placeholder="Your password"
                  required
                />
                {passwordError && <p className="text-red-600 text-sm mt-2">{passwordError}</p>}
              </div>
              <button
                type="submit"
                className="w-full text-xl font-bold text-white py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105"
              >
                Register
              </button>
            </form>

            <div className="relative flex items-center py-5">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="flex-shrink mx-4 text-gray-500">or</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            <button
              onClick={handleGoogleLogin}
              className="w-full flex items-center justify-center space-x-3 py-3 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200"
            >
              <FaGoogle size={20} className="text-blue-600" />
              <span className="text-[17px] font-semibold">Register with Google</span>
            </button>

            <p className="text-center text-gray-600 mt-6">
              Already Have an Account? Please{" "}
              <Link className="underline text-blue-600 hover:text-blue-700 transition-colors" to="/login">
                Log In
              </Link>
            </p>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Register;