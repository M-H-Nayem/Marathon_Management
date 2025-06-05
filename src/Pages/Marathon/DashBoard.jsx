import React from "react";
import { Link, NavLink, Outlet } from "react-router";

const DashBoard = () => {
  return (
    <div className="flex px-[5%] my-10 ">
      <div className="flex-1">
        <div className="flex flex-col h-screen justify-center">
          <NavLink className={({ isActive }) =>
            isActive ? "btn active-link text-black text-xl border-none bg-blue-400" : "btn border-none bg-amber-400  text-white text-xl"} to={"/dashboard/addmarathon"}>
            Add Marathon
          </NavLink>
          <NavLink className={({ isActive }) =>
            isActive ? "btn active-link text-black text-xl border-none bg-blue-400" : "btn border-none bg-amber-400  text-white text-xl"} to={"/dashboard/mymarathons"} >My Marathon List</NavLink>
          <NavLink className={({ isActive }) =>
            isActive ? "btn active-link text-black text-xl border-none bg-blue-400" : "btn border-none bg-amber-400  text-white text-xl"} to={"/dashboard/myapply"}>My Apply List</NavLink>
         </div>
      </div>
      <div className="flex-4">
        <div className="flex justify-center "><Outlet></Outlet></div>
      </div>
    </div>
  );
};

export default DashBoard;
