import React from "react";
import { Button } from "./ui/button";
import { Badge, Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";

const Job = () => {
  return (
    <div className="p-5 rounded-md bg-white shadow-xl border border-gray-100 cursor-pointer space-y-4">
      <div className="flex justify-between items-center">
        <p className="text-gray-500">2 days ago</p>
        <Button
          variant="outline"
          className="bg-lime-300 rounded-full"
          size="icon"
        >
          <Bookmark />
        </Button>
      </div>

      <div className="flex items-center space-x-2">
        <Avatar>
          <AvatarImage
            src="https://avatars.dicebear.com/api/avataaars/1.svg"
            alt="Company Logo"
          />
        </Avatar>
        <div>
          <h1 className="font-semibold text-lg">Company Name</h1>
          <p className="text-gray-700">Job Title</p>
        </div>
      </div>

      <div>
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, qui?
        </p>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <Badge variant="ghost" className={"bg-lime-300 w-1/3 text-black"}>
          10 Position
        </Badge>
        <Badge variant="ghost" className={"bg-lime-300 w-1/3 "}>
          Full Time
        </Badge>
        <Badge variant="ghost" className={"bg-lime-300 w-1/3"}>
          15 LPA
        </Badge>
      </div>
      <div>
        <Button className="bg-lime-300 text-white w-1/3 mt-4  px-2">
          Apply Now
        </Button>
        <Button className="bg-lime-300 text-white w-1/3 mt-4 ml-2 px-2">
          View Details
        </Button>
      </div>
    </div>
  );
};

export default Job;
