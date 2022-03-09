import React from "react";
import { Link } from "react-router-dom";

export const SideBar = () => {
  return (
    <aside className="w-64 h-full shadow-md" aria-label="Sidebar">
      <div className="h-screen overflow-y-auto py-4 px-3 bg-blue-700">
        <div className="flex flex-col p-2 my-3">
          <h3
            className="text-white text-3xl font-semibold mb-1"
            style={{ letterSpacing: "4px" }}
          >
            CARIFY
          </h3>
          <span className="text-gray-200 my-1">
            Today is {new Date().toDateString()}
          </span>
        </div>
        <ul class="space-y-2">
          <li>
            <Link
              to="/dashboard"
              className="flex items-center p-2 text-base font-normal  rounded-lg text-white hover:bg-blue-600"
            >
              <svg
                class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
              </svg>
              <span class="ml-3">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              to="/users"
              className="flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-blue-600"
            >
              <svg
                class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="flex-1 ml-3 whitespace-nowrap">Add Users</span>
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-blue-600"
            >
              <svg
                className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="flex-1 ml-3 whitespace-nowrap">Doctors</span>
            </Link>
          </li>
          <li>
            <Link
              to="/medicine-and-diet"
              className="flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-blue-600"
            >
              <svg
                xmlns="http:/
                 /www.w3.org/2000/svg"
                className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <span class="flex-1 ml-3 whitespace-nowrap">
                Medicines & Diet
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-blue-600"
            >
              <svg
                class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="flex-1 ml-3 whitespace-nowrap">Logout</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};
