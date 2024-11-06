import React from "react";
import LatestJobCart from "./LatestJobCart";

const LatestJobs = () => {
  const random = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div>
      <h1 className="text-2xl font-bold text-center">Job Openings</h1>
      <div>
        {
          random.map((value, index) => {
            return (
              <div
                key={index}
                className="p-5 rounded-md bg-white shadow-xl border-gray-100 cursor-pointer"
              >
                <LatestJobCart />
              </div>
            );
          }) // Latest Job Cards
        }
      </div>
    </div>
  );
};

export default LatestJobs;
