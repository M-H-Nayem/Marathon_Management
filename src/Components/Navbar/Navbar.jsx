import React, { use } from "react";
import { AuthContext } from "../../AuthProvider";
import { Link } from "react-router";


const Navbar = () => {
  let { user, logOut } = use(AuthContext);

  let handleLogout = () => {
    // console.log("out");
    logOut()
      .then((res) => {})
      .catch((err) => {});
  };
  return (

    <>
    <div className="">
      <div className="navbar bg-base-100 shadow-sm px-[5%]">
        <div className="flex-1">
          <h1 className=" text-3xl">Marathon</h1>
        </div>
        <div className="flex-none">
          <div className="menu menu-horizontal px-1">
            <div>
              {user ? (
                <div className="flex gap-2">
                  <Link className="btn border-none bg-amber-400 text-black font-semibold rounded-xl " to={"/"}>
                    Home
                  </Link>
                  <Link className="btn border-none bg-amber-400 text-black font-semibold rounded-xl " to={"/marathons"}>
                    Marathons
                  </Link>
                  <Link className="btn border-none bg-amber-400 text-black font-semibold rounded-xl " to={"/dashboard"}>
                    Dashboard
                  </Link>
                  <div>
                  </div>
                  <button className="btn border-none bg-amber-400 text-black font-semibold rounded-xl " onClick={handleLogout}>
                    Logout
                  </button>
                </div>
              ) : (
                <div className="flex gap-3">
                  <Link className="btn border-none bg-amber-400 text-black font-semibold rounded-xl" to={"/"}>
                    Home
                    </Link>
                     {/* <Link className="btn" to={"/dashboard"}>
                    Dashboard
                  </Link> */}
                  <Link className="btn border-none bg-amber-400 text-black font-semibold rounded-xl" to={"/marathons"}>
                    Marathons
                  </Link>
                  <Link className="btn border-none bg-amber-400 text-black font-semibold rounded-xl" to={"/login"}>
                    Log In
                  </Link>
                  <Link className="btn border-none bg-amber-400 text-black font-semibold rounded-xl" to={"/register"}>
                    Register
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Navbar;
