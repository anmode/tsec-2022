import React from "react";
import { AccuracyChart } from "../components/AccuracyChart";
import { JokesBlock } from "../components/JokesBlock";
import { Layout } from "../components/Layout";

const food_diet = [
  {
    food: "Sandwhich and Orange Juice",
    dateTime: "9 March 2022, 9:00 am ",
  },
  {
    food: "Sandwhich and Orange Juice",
    dateTime: "9 March 2022, 9:00 am ",
  },
  {
    food: "Sandwhich and Orange Juice",
    dateTime: "9 March 2022, 9:00 am ",
  },
  {
    food: "Sandwhich and Orange Juice",
    dateTime: "9 March 2022, 9:00 am ",
  },
];

export const Dashboard = () => {
  return (
    <Layout>
      <div className="grid grid-cols-2 w-full gap-7 mb-2 h-96">
        <div className="bg-white p-8 shadow-md rounded-md h-auto flex flex-col items-center">
          <JokesBlock />
        </div>
        <div className="bg-white p-8 shadow-md rounded-md overflow-y-scroll">
          <h4 className="text-xl font-semibold text-gray-700 mb-3">
            Patient's Today Diet
          </h4>
          <ol className="relative border-l border-gray-600 py-3">
            {food_diet.map((item) => (
              <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-gray-700 rounded-full -left-1.5 border border-gray-800"></div>
                <time className="mb-1 text-base font-normal leading-none text-gray-700">
                  {item.dateTime}
                </time>
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.food}
                </h3>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="grid grid-cols-1 w-full h-auto gap-7 mt-2">
        <div className="bg-white p-8 shadow-md rounded-md">
          <h4 className="text-xl font-semibold text-gray-700 mb-3">
            Patient's Accuracy
          </h4>
          <AccuracyChart />
        </div>
      </div>
    </Layout>
  );
};
