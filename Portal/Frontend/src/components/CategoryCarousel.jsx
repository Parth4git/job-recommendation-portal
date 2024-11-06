import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Button } from "./ui/button";

const category = [
  "Frontend Developer",
  "Backend Developer",
  "Fullstack Developer",
  "DevOps Engineer",
  "Data Scientist",
  "Data Analyst",
  "UI/UX Designer",
  "Mobile Developer",
  "QA Engineer",
];

const CategoryCarousel = () => {
  return (
    <div>
      <Carousel className="w-full max-w-xl mx-auto my-20">
        <CarouselContent>
          {category.map((cat, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg-basis-1/4 ">
              <Button variant="outline" className="rounded-full">
                {cat}
              </Button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-gray-900 text-white p-2 rounded-full mt-2" />
        <CarouselNext className="bg-gray-900 text-white p-2 rounded-full mt-2" />
      </Carousel>
    </div>
  );
};

export default CategoryCarousel;
