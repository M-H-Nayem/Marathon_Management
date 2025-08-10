import React, { useContext } from "react";
import DynamicTitle from "../../../Components/DynamicTitle";
import { AuthContext } from "../../../AuthProvider"; // Assuming you have an AuthContext to get user info

const DashHome = () => {
  const { user } = useContext(AuthContext); // Get user from context

  return (
    <>
      <DynamicTitle title="Dashboard"></DynamicTitle>
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-100px)] p-4">
        <div className="w-full max-w-2xl p-8 md:p-12 rounded-3xl bg-white shadow-2xl transform transition-transform duration-500 hover:scale-105">
          {user && (
            <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4 animate-fadeIn text-center ">
              Welcome, {user.displayName}! 🎉
            </h1>
          )}
          <p className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">
            This is your personalized Marathon dashboard.
          </p>

          <div className="space-y-4 text-left">
            <div className="flex items-center space-x-3 text-lg md:text-xl text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-green-500 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                />
              </svg>
              <span>
                Add new marathon events for others to see and join.
              </span>
            </div>
            <div className="flex items-center space-x-3 text-lg md:text-xl text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-yellow-500 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 10h16M4 14h16M4 18h16"
                />
              </svg>
              <span>
                View and manage your list of created marathons.
              </span>
            </div>
            <div className="flex items-center space-x-3 text-lg md:text-xl text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-purple-500 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
              <span>
                See a list of all marathons you have applied for.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashHome;