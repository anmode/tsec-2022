import React from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";

export const SignInForm = ({ setFormState }) => {
  const Formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      const userData = {
        email: values.email,
        password: values.password,
      };

      console.log(userData);
    },
  });

  return (
    <div className="flex flex-col justify-center items-center gap-3 px-4 py-6 w-10/12 rounded-md shadow-md">
      <h3 className="text-3xl text-gray-800 font-normal">
        Welcome Back to
        <span className="text-blue-700 px-2 font-bold">CARIFY</span>
      </h3>
      <p className="text-base text-gray-600">
        Now take care of your patient more smartly
      </p>
      <form
        className="grid grid-cols-1 p-3 w-3/4"
        onSubmit={Formik.handleSubmit}
      >
        <div className="flex flex-col gap-2 py-3">
          <label
            className="text-base font-semibold text-gray-700"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            onChange={Formik.handleChange}
            value={Formik.values.email}
            className="rounded-md border-gray-700"
            placeholder="example@gmail.com"
            required
          />
        </div>
        <div className="flex flex-col gap-2 py-3">
          <label
            className="text-base font-semibold text-gray-700"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="text"
            className="rounded-md border-gray-700"
            name="password"
            id="password"
            onChange={Formik.handleChange}
            value={Formik.values.password}
            placeholder="*********"
            required
          />
        </div>
        <button
          type="submit"
          className="flex justify-center items-center gap-3 bg-blue-700 text-gray-100 rounded-md shadow-md px-6 py-2 text-lg my-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
            />
          </svg>
          Sign In
        </button>
        <button type="button" className="my-2">
          Don't have an account?
          <span
            className="text-blue-700 px-2 font-medium hover:underline"
            onClick={() => setFormState((prev) => !prev)}
          >
            Sign Up
          </span>
        </button>
        <div className="flex justify-center">
          <Link
            to="/homepage"
            className="underline hover:text-blue-700 text-base"
          >
            Go back to Homepage
          </Link>
        </div>
      </form>
    </div>
  );
};
