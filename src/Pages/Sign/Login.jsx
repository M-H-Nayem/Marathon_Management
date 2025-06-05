import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider";

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
    <>
      <div className="card bg-[#1E1E1E] w-full max-w-lg text-white shrink-0 shadow-[0_0px_80px_rgba(255,215,0,0.7)]xl mx-auto rounded-2xl my-10 p-5">
        <h1 className="text-center text-3xl font-bold">Log In</h1>
        <div className="card-body  rounded-2xl">
          <form onSubmit={handleLogin} className="fieldset">
            <label className="label text-xl">Email</label>
            <input
              name="email"
              type="email"
              className="input bg-[#1c2128] px-3 w-full"
              placeholder="Email"
              required
            />
            <label className="label text-xl">Password</label>
            <input
              name="password"
              type="password"
              className="input  bg-[#1c2128] px-3 w-full"
              placeholder="Password"
              required
            />
            <div className="hover:underline">
              <Link>Forgot password?</Link>
            </div>
            {error && <p className="text-red-700">{error}</p>}
            <button
              type="submit"
              className="btn text-xl text-white  bg-orange-300 mt-2 border-none "
            >
              Login
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
              Login with Google
            </button>
            <p>
              New in this Website ? Please{" "}
              <Link className="underline text-blue-400" to="/register">
                Register
              </Link>{" "}
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
