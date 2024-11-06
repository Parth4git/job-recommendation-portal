import React from "react";
import Navbar from "./shared/Navbar";
import FilterCard from "./FilterCard";
import Job from "./Job";

const jobarray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Jobs = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto mt-5">
        <div className="flex gap-5">
          <div className="w-1/5">
            <FilterCard />
          </div>
          {jobarray.length <= 0 ? (
            <h1>No Jobs Found</h1>
          ) : (
            <div className="flex-1 h-[80vh] overflow-y-scroll pb-4">
              <div className="grid grid-cols-3 gap-5">
                {jobarray.map((value, index) => (
                  <div key={index}>
                    <Job />
                  </div>
                ))}{" "}
                {/* Job Cards */}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
