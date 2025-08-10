import React, { useContext, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { AuthContext } from "../../AuthProvider";

const DashBoard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const linkClass = ({ isActive }) =>
    isActive
      ? "btn border-none bg-gradient-to-r from-[#1E40AF] to-[#06B6D4] text-white shadow-lg"
      : "btn border-none bg-[#1E40AF] text-white hover:from-[#06B6D4] hover:to-[#1E3A8A] hover:bg-gradient-to-r shadow-lg";

  return (
    <div className="min-h-screen relative bg-white flex">
      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-opacity-50 z-40 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 h-fit left-0 bg-white  mt-[64px] lg:mt-0 p-6 z-50 lg:z-10 transform transition-transform duration-300 w-64 lg:w-1/4 overflow-y-auto
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 lg:static lg:flex-shrink-0`}
      >
        {/* Header + Close Button on Mobile */}
        <div className="flex justify-between items-center mb-6 lg:hidden">
          <h2 className="text-2xl font-bold">Dashboard</h2>
          <button onClick={toggleSidebar} aria-label="Close sidebar">
            <FaTimes className="text-2xl" />
          </button>
        </div>

        {/* Links */}
        <nav className="flex flex-col gap-4">
          <NavLink
            to="/dashboard/addmarathon"
            onClick={() => setIsSidebarOpen(false)}
            className={linkClass}
          >
            Add Marathon
          </NavLink>
          <NavLink
            to="/dashboard/my-marathons"
            onClick={() => setIsSidebarOpen(false)}
            className={linkClass}
          >
            My Marathon List
          </NavLink>
          <NavLink
            to="/dashboard/myapply"
            onClick={() => setIsSidebarOpen(false)}
            className={linkClass}
          >
            My Apply List
          </NavLink>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 min-h-screen">
        {/* Mobile Navbar with toggle button */}
        <header className="lg:hidden flex justify-between items-center p-5 bg-white shadow-md">
          <h2 className="text-2xl font-bold">Dashboard</h2>
          <button onClick={toggleSidebar} aria-label="Open sidebar">
            <FaBars className="text-3xl" />
          </button>
        </header>

        {/* Outlet for nested routes */}
        <div className="lg:p-10 p-3 min-h-screen">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashBoard;