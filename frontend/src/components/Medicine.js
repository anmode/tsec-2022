import { useFormik } from "formik";
import React, { useRef, useState } from "react";

const meidicines = [
  {
    id: "m1",
    title: "MKS Crocin",
    description: "",
    type: "Before Breakfast",
    dateTime: "9 March 2022, 9:00 am ",
  },
  {
    id: "m2",
    title: "JJ Brain Improve",
    description: "Lorem ipsum dolor sit amet consectetur",
    type: "After Dinner",
    dateTime: "9 March 2022, 9:00 pm ",
  },
];

export const Medicine = () => {
  const selectRef = useRef();
  const [stateData, setStateData] = useState(meidicines);

  const deleteItem = (id) => {
    setStateData(meidicines.filter((item) => item.id !== id));
  };

  const medicineFormik = useFormik({
    initialValues: {
      type: "",
      title: "",
      description: "",
      dose: "",
      dateTime: "",
    },
    onSubmit: (values) => {
      values.type = selectRef.current?.value;
      const newMedicine = {
        type: values.type,
        title: values.title,
        description: values.description,
        dose: values.dose,
        dateTime: values.dateTime,
      };

      console.log(newMedicine);
    },
  });

  return (
    <>
      <div className="flex flex-col">
        <div className="flex py-3 my-1">
          <button
            class="block text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            type="button"
            data-modal-toggle="medicineModal"
          >
            Create New Medicine Plan
          </button>
        </div>
        <div className="bg-white p-8 shadow-md rounded-md">
          <div className="flex justify-end mb-3">
            <input
              type="date"
              className="py-2 text-base rounded-md bg-gray-100 border-0"
              name=""
              id=""
            />
          </div>
          <h4 className="text-2xl font-semibold text-gray-800 mb-3">
            Patient's Today Medicine
          </h4>
          <ol className="relative border-l border-gray-600 py-3">
            {stateData.map((item) => (
              <li className="mb-6 ml-4">
                <div className="absolute w-3 h-3 bg-gray-700 rounded-full -left-1.5 border border-gray-800"></div>
                <time className="flex justify-between mb-1 text-base font-normal leading-none text-gray-700">
                  {item.dateTime}
                  <button
                    type="button"
                    className="absolute z-20 right-0"
                    onClick={() => deleteItem(item.id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 hover:text-red-800"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>
                </time>
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="my-1 text-base leading-none text-red-700 font-medium">
                  {item.type}
                </p>
                <p className="my-1 text-base font-normal leading-none text-gray-700">
                  {item.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* form modal */}
      <form
        onSubmit={medicineFormik.handleSubmit}
        id="medicineModal"
        aria-hidden="true"
        className="hidden overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal h-10/12"
      >
        <div className="relative px-4 w-10/12 max-w-2xl h-full">
          <div className="relative bg-white rounded-lg shadow">
            <div className="flex justify-between items-start px-5 py-2 rounded-t">
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-2 ml-auto inline-flex items-center"
                data-modal-toggle="medicineModal"
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
                  Select type
                </label>
                <select
                  ref={selectRef}
                  id="role"
                  name="role"
                  value={medicineFormik.values.role}
                  onChange={medicineFormik.handleChange}
                  className=" border border-gray-700 text-gray-900 rounded-md"
                >
                  <option>Before Breakfast</option>
                  <option>After Breakfast</option>
                  <option>Before Lunch</option>
                  <option>After Lunch</option>
                  <option>Before Dinner</option>
                  <option>After Dinner</option>
                </select>
              </div>
              <div className="flex flex-col gap-2 py-1">
                <label
                  className="text-base font-semibold text-gray-700"
                  htmlFor="title"
                >
                  Medicine Name
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  onChange={medicineFormik.handleChange}
                  value={medicineFormik.values.title}
                  className="rounded-md border-gray-700"
                  required
                />
              </div>
              <div className="flex flex-col gap-2 py-1">
                <label
                  className="text-base font-semibold text-gray-700"
                  htmlFor="email"
                >
                  Description
                </label>
                <textarea
                  name="description"
                  id="description"
                  className="rounded-md border-gray-700"
                  onChange={medicineFormik.handleChange}
                  value={medicineFormik.values.description}
                  cols="30"
                  rows="3"
                ></textarea>
              </div>
              <div className="flex flex-col gap-2 py-1">
                <label
                  className="text-base font-semibold text-gray-700"
                  htmlFor="dose"
                >
                  Medicine Dose
                </label>
                <input
                  type="text"
                  name="dose"
                  id="dose"
                  onChange={medicineFormik.handleChange}
                  value={medicineFormik.values.dose}
                  className="rounded-md border-gray-700"
                  required
                />
              </div>
              <div className="flex flex-col gap-2 py-1">
                <label
                  className="text-base font-semibold text-gray-700"
                  htmlFor="dateTime"
                >
                  Date & Time
                </label>
                <input
                  type="datetime-local"
                  className="rounded-md border-gray-700"
                  name="dateTime"
                  id="dateTime"
                  onChange={medicineFormik.handleChange}
                  value={medicineFormik.values.dateTime}
                  required
                />
              </div>
              <button
                type="submit"
                className="flex justify-center items-center gap-3 bg-blue-700 text-gray-100 rounded-md shadow-md px-6 py-2 text-lg my-2 mt-4 w-full"
              >
                Submit medicine Plan
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
