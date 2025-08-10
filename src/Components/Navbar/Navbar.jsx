import React, { useContext } from "react";
import { AuthContext } from "../../AuthProvider";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut().catch(() => {});
  };

  const linkClass = ({ isActive }) =>
    isActive
      ? "btn border-none bg-gradient-to-r from-[#1E40AF] to-[#06B6D4] text-white shadow-lg"
      : "btn border-none bg-[#1E40AF] text-white hover:from-[#06B6D4] hover:to-[#1E3A8A] hover:bg-gradient-to-r shadow-lg";

  return (
    <nav className="w-full sticky top-0 z-50 bg-gradient-to-l from-[#1E40AF] to-[#06B6D4] text-white shadow-md ">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-16 px-3 lg:px-0">
        {/* Logo & Title */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
            <img
              className="w-10 h-10 rounded-full object-cover"
              src="/logo.png"
              alt="Marathon Pro Logo"
              loading="lazy"
            />
          </div>
          <h1 className="text-white text-3xl font-bold select-none tracking-wide">
            Marathon Pro
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
          

          {user ? (
            <>
            <NavLink to="/marathons" className={linkClass}>
            Marathons
          </NavLink>
              <NavLink to="/dashboard" className={linkClass}>
                Dashboard
              </NavLink>
              {/* <NavLink to="/results" className={linkClass}>
                Results
              </NavLink> */}
              <NavLink to="/profile" className={''}>
                {/* Profile */}
              <img
                src={user.photoURL || "/default-profile.png"}
                alt="Profile"
                title={user.email}
                className="w-10 h-10 rounded-full border-2 border-[#1E40AF] object-cover"
              />
              </NavLink>
              <button
                onClick={handleLogout}
                className="btn bg-[#F97316] text-white border-none hover:bg-[#dc5b13] shadow font-semibold"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink to="/login" className={linkClass}>
                Log In
              </NavLink>
              <NavLink to="/register" className={linkClass}>
                Register
              </NavLink>
            </>
          )}
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden dropdown dropdown-end">
          <label
            tabIndex={0}
            className="btn bg-[#F97316] text-white border-none hover:bg-[#dc5b13] shadow"
          >
            Menu
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-white rounded-box w-52 text-[#1E40AF] font-semibold flex gap-3"
          >
            <li>
              <NavLink to="/" className={linkClass}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/marathons" className={linkClass}>
                Marathons
              </NavLink>
            </li>
            {user ? (
              <>
                <li>
                  <NavLink to="/dashboard" className={linkClass}>
                    Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/results" className={linkClass}>
                    Results
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/profile" className={linkClass}>
                    Profile
                  </NavLink>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="btn w-full bg-[#F97316] text-white border-none hover:bg-[#dc5b13]"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/login" className={linkClass}>
                    Log In
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/register" className={linkClass}>
                    Register
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
