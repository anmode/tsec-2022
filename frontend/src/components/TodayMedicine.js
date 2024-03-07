import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

// Function to speak the given text
const speak = (text) => {
  const utterance = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(utterance);
};

export const TodayMedicine = ({ option = 1, deleteItem = "" }) => {
  const [medicineData, setMedicineData] = useState([]);
  const {
    userData: { id },
  } = useSelector((state) => state?.users);

  // Function to check medicine time and trigger speech notification
  // Function to check medicine time and trigger speech notification
// Function to check medicine time and trigger speech notification
const checkMedicineTimes = () => {
  // Get current time in the same format as medicine time
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = String(currentDate.getMonth() + 1).padStart(2, '0');
  const currentDay = String(currentDate.getDate()).padStart(2, '0');
  const currentHours = String(currentDate.getHours()).padStart(2, '0');
  const currentMinutes = String(currentDate.getMinutes()).padStart(2, '0');
  const currentTime = `${currentYear}-${currentMonth}-${currentDay}T${currentHours}:${currentMinutes}`;
  console.log(currentTime);
  // Loop through medicines and check if any match the current time
  medicineData.forEach((medicine) => {
    console.log(medicine);
    if (medicine.medicine_time === currentTime) {
      console.log("speak");
      speak(`Time to take ${medicine.medicine_name}`);
    }
  });
};



  useEffect(() => {
    // Fetch medicine data only when the component mounts or when `id` changes
    const getData = async () => {
      const res = await axios.post(
        process.env.REACT_APP_BASE_URL + "/medicine/get-medicine",
        { carTakerId: id }
      );

      console.log(res.data.message);
      if (res.data.data === []) setMedicineData([]);
      else setMedicineData(res.data.message);
    };

    getData();

    // Check medicine times every minute
    const interval = setInterval(checkMedicineTimes, 600);
    return () => clearInterval(interval);
  }, [id]); // Fetch data when `id` changes

  return (
    <>
      {medicineData.length === 0 && (
        <h4 className="text-xl font-semibold text-gray-700 mb-3">
          Patient's Medicine Plan Not Added
        </h4>
      )}
      {medicineData.length > 0 && (
        <div>
          <h4 className="text-2xl font-semibold text-gray-800 mb-3">
            Patient's Today Medicine
          </h4>
          <ol className="relative border-l border-gray-600 py-3">
            {medicineData.map((item) => (
              <li className="mb-6 ml-4">
                <div className="absolute w-3 h-3 bg-gray-700 rounded-full -left-1.5 border border-gray-800"></div>
                <time className="flex justify-between mb-1 text-base font-normal leading-none text-gray-700">
                  {item.medicine_time}
                  <button
                    type="button"
                    className="absolute z-20 right-0"
                    onClick={() => deleteItem(item._id)}
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
                  {item.medicine_name}
                </h3>
                <p className="flex gap-2 my-1 text-base leading-none text-red-700 font-medium">
                  {item.type} ({item.dose} dose)
                </p>
                <p className="my-1 text-base font-normal leading-none text-gray-700">
                  {item.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      )}
    </>
  );
};
