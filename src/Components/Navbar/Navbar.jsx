import React, { use } from "react";
import { AuthContext } from "../../AuthProvider";
import { NavLink, Link } from "react-router";
import { FaUserAlt } from "react-icons/fa";

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
            <div className="flex gap-2 item-center ">
              <div className="flex items-center justify-center w-12 h-12 rounded-full dark:bg-violet-600">
                <div className="w-10 rounded-full">
                  <img className="w-10 rounded-full" src="/logo.png" alt="" />
                </div>
              </div>
              <h1 className=" text-4xl font-bold bg-gradient-to-l from-[#2117de] to-[#f40404]  bg-clip-text text-transparent">
                Marathon Pro
              </h1>
              <label className="swap swap-rotate">
                {/* this hidden checkbox controls the state */}
                <input
                  type="checkbox"
                  className="theme-controller"
                  value="synthwave"
                />

                {/* sun icon */}
                <svg
                  className="swap-off h-10 w-10 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>

                {/* moon icon */}
                <svg
                  className="swap-on h-10 w-10 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              </label>
            </div>
          </div>
          <div className="flex-none">
            <div className="menu menu-horizontal px-1">
              <div>
                {user ? (
                  <div className="flex gap-2 ">
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "btn active-link text-black  border-none bg-blue-400"
                          : "btn border-none bg-amber-400  text-white "
                      }
                      to={"/"}
                    >
                      Home
                    </NavLink>
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "btn active-link text-black  border-none bg-blue-400"
                          : "btn border-none bg-amber-400  text-white "
                      }
                      to={"/marathons"}
                    >
                      Marathons
                    </NavLink>
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "btn active-link text-black  border-none bg-blue-400"
                          : "btn border-none bg-amber-400  text-white "
                      }
                      to={"/dashboard"}
                    >
                      Dashboard
                    </NavLink>
                    
                    <NavLink to={"/profile"}>
                      {user ? (
                        <img
                          className="rounded-full w-10 h-10"
                          src={user?.photoURL}
                          title={user?.email}
                          alt="Profile"
                        />
                      ) : (
                        <FaUserAlt
                          size={30}
                          fill="gold"
                          title={user?.email}
                          className="mt-1"
                        />
                      )}
                    </NavLink>
                    <button
                      className="btn border-none bg-amber-400  text-white "
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "btn active-link text-black  border-none bg-blue-400"
                          : "btn border-none bg-amber-400  text-white "
                      }
                      to={"/register"}
                    >
                      Register
                    </NavLink>
                  </div>
                ) : (
                  <div className="flex gap-3">
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "btn active-link text-black  border-none bg-blue-400"
                          : "btn border-none bg-amber-400  text-white "
                      }
                      to={"/"}
                    >
                      Home
                    </NavLink>
                    {/* <NavLink className="btn" to={"/dashboard"}>
                    Dashboard
                  </NavLink> */}
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "btn active-link text-black  border-none bg-blue-400"
                          : "btn border-none bg-amber-400  text-white "
                      }
                      to={"/marathons"}
                    >
                      Marathons
                    </NavLink>
                    {/* <NavLink to={`/profile`}></NavLink> */}
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "btn active-link text-black  border-none bg-blue-400"
                          : "btn border-none bg-amber-400  text-white "
                      }
                      to={"/login"}
                    >
                      Log In
                    </NavLink>
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "btn active-link text-black  border-none bg-blue-400"
                          : "btn border-none bg-amber-400  text-white "
                      }
                      to={"/register"}
                    >
                      Register
                    </NavLink>
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
