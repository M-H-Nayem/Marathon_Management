import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider";
import DynamicTitle from "../../Components/DynamicTitle";

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
    console.log({name,photo,email,password});
    // console.log(name, photo, email, password);

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
        // console.log(result.user);
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            // alert("Thanks, Your SignUp Complete");
            Swal.fire({
              // position: "top-end",
              icon: "success",
              title: "Thanks, Your SignUp Complete",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate(`${location.state ? location.state : "/"}`);
          })
          .catch((error) => {
            setUser(user);
            // console.log(error);
          });
      })
      .catch((error) => {
        // console.log(error);
      });
  };

  let handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {});
  };

  //   console.log(user);
  return (
    <>
      <DynamicTitle></DynamicTitle>
      <div className="card bg-[#1E1E1E] text-white w-full max-w-lg shrink-0 shadow-[0_0px_80px_rgba(255,215,0,0.7)]xl mx-auto rounded-2xl my-10 p-5">
      <h1 className="text-center text-3xl font-bold">Please Register</h1>
      <div className="card-body  rounded-2xl">
        <form onSubmit={handleSubmit} className="fieldset">
          <label className=" text-xl w-full">Name</label>
          <input
            name="name"
            type="text"
            className="input bg-[#1c2128] px-3 w-full"
            placeholder="Name"
            required
          />
          {nameError && <p className="text-red-700">{nameError}</p>}
          <label className="  text-xl">Photo Url</label>
          <input
            name="photo"
            type="text"
            className="input bg-[#1c2128] px-3 w-full"
            placeholder="Provide Photo Url"
            required
          />
          <label className="text-xl">Email</label>
          <input
            name="email"
            type="email"
            className="input bg-[#1c2128] px-3 w-full"
            placeholder="Email"
            required
          />
          <label className=" text-xl">Password</label>
          <input
            name="password"
            type="password"
            className="input bg-[#1c2128] px-3 w-full"
            placeholder="Password"
            required
          />
          {passwordError && <p className="text-red-700">{passwordError}</p>}
          <button
            type="submit"
            className="btn text-xl text-white  bg-orange-400 mt-5 border-none "
          >
            Register
          </button>
          <button
            onClick={handleGoogleLogin}
            className="btn bg-white text-black border-[#e5e5e5] text-[17px] mt-3"
          >
            <svg
              aria-label="Google logo"
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Register with Google
          </button>
          <p>
            Already Have an Account ? Please{" "}
            <Link className="underline text-blue-400" to="/login">
              Log In
            </Link>{" "}
          </p>
          {/* <ToastContainer></ToastContainer> */}
        </form>
      </div>
    </div></>
  );
};

export default Register;
