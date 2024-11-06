import React from "react";
import { Badge } from "./ui/badge";

const LatestJobCart = () => {
  return (
    <div className="p-5 rounded-md bg-slate-100 shadow-xl border-gray-100 cursor-pointer">
      <div className="flex items-center justify-between">
        <h1>Company name</h1>
        <p>India</p>
      </div>
      <div>
        <h1>Job Title</h1>
        <p>Job Description</p>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <Badge variant="outline" className={"bg-lime-300"}>
          10 Position
        </Badge>
        <Badge variant="outline" className={"bg-lime-300"}>
          Full Time
        </Badge>
        <Badge variant="outline" className={"bg-lime-300"}>
          15 LPA
        </Badge>
      </div>
    </div>
  );
};

export default LatestJobCart;
