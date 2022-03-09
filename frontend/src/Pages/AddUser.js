import React, { useRef } from "react";
import { Layout } from "../components/Layout";
import { useFormik } from "formik";

const usersData = [
  {
    name: "John doe",
    contact: "996939391",
    role: "Family Member",
  },
];

export const AddUser = () => {
  const selectRef = useRef();

  const Formik = useFormik({
    initialValues: {
      name: "",
      role: "",
      email: "",
      contact: "",
    },
    onSubmit: (values) => {
      values.role = selectRef?.current.value;
      const newUser = {
        role: values.role,
        name: values.name,
        email: values.email,
        contact: values.contact,
      };

      console.log(newUser);
    },
  });

  return (
    <Layout>
      <div className="grid grid-cols-1 w-full gap-7 mx-2">
        <div className="w-auto">
          <button
            class="block text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            type="button"
            data-modal-toggle="defaultModal"
          >
            Create New Member
          </button>
        </div>

        <div className="p-1">
          <div className="flex flex-col">
            <h3 className="text-xl my-2 font-semibold text-gray-700">
              All Members
            </h3>
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block py-2 min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden shadow-md sm:rounded-lg">
                  <table className="min-w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase"
                        >
                          Role
                        </th>
                        <th
                          scope="col"
                          className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase"
                        >
                          Contact
                        </th>
                        <th
                          scope="col"
                          className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase"
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {usersData.map((item) => (
                        <tr className="bg-white border-b">
                          <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                            {item.name}
                          </td>
                          <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
                            {item.role}
                          </td>
                          <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
                            {item.contact}
                          </td>
                          <td className="flex py-4 p-4 text-sm font-medium whitespace-nowrap">
                            <button
                              type="button"
                              className="px-3 text-red-600 hover:underline"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* form modal */}
      <form
        onSubmit={Formik.handleSubmit}
        id="defaultModal"
        aria-hidden="true"
        className="hidden overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal h-10/12"
      >
        <div className="relative px-4 w-10/12 max-w-2xl h-full">
          <div className="relative bg-white rounded-lg shadow">
            <div className="flex justify-between items-start px-5 py-2 rounded-t">
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                data-modal-toggle="defaultModal"
              >
                Close
              </button>
            </div>

            <div className="p-6 space-y-2">
              <div className="flex flex-col gap-2 py-1">
                <label
                  className="text-base font-semibold text-gray-700"
                  htmlFor="role"
                >
                  Select member role
                </label>
                <select
                  ref={selectRef}
                  id="role"
                  name="role"
                  value={Formik.values.role}
                  onChange={Formik.handleChange}
                  className=" border border-gray-700 text-gray-900 rounded-md"
                >
                  <option>Family Member</option>
                  <option>Doctor</option>
                </select>
              </div>
              <div className="flex flex-col gap-2 py-1">
                <label
                  className="text-base font-semibold text-gray-700"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  onChange={Formik.handleChange}
                  value={Formik.values.name}
                  className="rounded-md border-gray-700"
                  required
                />
              </div>
              <div className="flex flex-col gap-2 py-1">
                <label
                  className="text-base font-semibold text-gray-700"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={Formik.handleChange}
                  value={Formik.values.email}
                  className="rounded-md border-gray-700"
                  placeholder="example@gmail.com"
                  required
                />
              </div>
              <div className="flex flex-col gap-2 py-1">
                <label
                  className="text-base font-semibold text-gray-700"
                  htmlFor="password"
                >
                  Contact Number
                </label>
                <input
                  type="number"
                  className="rounded-md border-gray-700"
                  name="contact"
                  id="contact"
                  onChange={Formik.handleChange}
                  value={Formik.values.contact}
                  required
                />
              </div>
              <button
                type="submit"
                className="flex justify-center items-center gap-3 bg-blue-700 text-gray-100 rounded-md shadow-md px-6 py-2 text-lg my-2"
              >
                Add User
              </button>
            </div>
          </div>
        </div>
      </form>
    </Layout>
  );
};
