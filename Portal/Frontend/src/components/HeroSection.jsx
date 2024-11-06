import { Search } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mt-10">Welcome to Job Portal</h1>
      <p className="text-lg mt-5">Find the best job for you</p>
      <input
        type="text"
        placeholder="Search for jobs"
        className="border border-gray-300 p-2 rounded-md mt-5 w-1/2"
      />
      <Button className="bg-gray-900 text-white p-2 rounded-md mt-2">
        <Search className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default HeroSection;
