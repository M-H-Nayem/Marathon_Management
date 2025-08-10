import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider";
import DynamicTitle from "../../Components/DynamicTitle";
import { Helmet } from "react-helmet-async";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  let [error, setError] = useState("");
  let { logIn, googleLogin } = use(AuthContext);
  let navigate = useNavigate();
  let location = useLocation();
  // console.log(location);

  let handleLogin = (e) => {
    e.preventDefault();
    let form = e.target;
    let email = form.email.value;
    let password = form.password.value;
    let user = {
      email,
      password,
    };
    // console.log(user);
    logIn(email, password)
      .then((result) => {
        navigate(`${location.state ? location.state : "/"}`);
        // console.log(result.user);
        Swal.fire({
          // position: "top-end",
          icon: "success",
          title: "User Logged in sucessfully",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => setError("Invalid Email or Password"));
  };

  let handleGoogleLogin = () => {
    googleLogin()
      .then((res) => {
        // console.log(res.user);
        navigate(`${location.state ? location.state : "/"}`);
        Swal.fire({
          // position: "top-end",
          icon: "success",
          title: "Google Login sucessfully Complete",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        // console.log(err);
      });
  };

    return (
    <div>
      <DynamicTitle></DynamicTitle>
       <div className="flex justify-center items-center min-h-[calc(100vh-100px)] p-4 ">
        <div className="w-full max-w-lg bg-white text-gray-900 rounded-3xl shadow-xl p-8 transform transition-transform duration-500 ">
          <div className="text-center mb-8">
            <h1 className="text-4xl mb-10 bg-gradient-to-r from-[#1E40AF] to-[#06B6D4] bg-clip-text text-transparent md:text-5xl font-bold text-center lg:h-15">
              Log In
            </h1>
          </div>
          <div className="space-y-6">
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xl font-semibold mb-2 bg-gradient-to-r from-[#1E40AF] to-[#06B6D4] bg-clip-text text-transparent">Email</label>
                <input
                  name="email"
                  type="email"
                  className="w-full px-4 py-3 bg-gray-50 text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors"
                  placeholder="Your email address"
                  required
                />
              </div>
              <div>
                <label className="block text-xl font-semibold mb-2 bg-gradient-to-r from-[#1E40AF] to-[#06B6D4] bg-clip-text text-transparent">Password</label>
                <input
                  name="password"
                  type="password"
                  className="w-full px-4 py-3 bg-gray-50 text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors"
                  placeholder="Your password"
                  required
                />
              </div>
              <div className="text-sm text-right">
                <p  className="text-blue-600 hover:underline transition-colors">
                  Forgot password?
                </p>
              </div>
              {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
              <button
                type="submit"
                className="w-full text-xl font-bold text-white py-3 rounded-lg btn border-none bg-gradient-to-r from-[#1E40AF] to-[#06B6D4]  shadow-lg transition-colors duration-300 transform hover:scale-101"
              >
                Login
              </button>
            </form>

            <div className="relative flex items-center py-5">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="flex-shrink mx-4 text-gray-500">or</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            <button
              onClick={handleGoogleLogin}
              className="w-full btn flex items-center justify-center space-x-3 py-3 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200"
            >
              <FaGoogle size={20} className="text-blue-600" />
              <span className="text-[17px] font-semibold">Login with Google</span>
            </button>

            <p className="text-center text-gray-600 mt-6">
              New to this Website? Please{' '}
              <Link className="underline text-blue-600 hover:text-blue-700 transition-colors" to="/register">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
