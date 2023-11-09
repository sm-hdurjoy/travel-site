import React from "react";
import Carouselmage from "../assets/carousel-image-1.jpg";

export const CarouselItem = () => {
  return (
    <div className="p-3">
      <div className="justify-center items-center flex mb-4">
        <img src={Carouselmage} alt="" className="h-[400px]" />
      </div>
      <div className="flex flex-col w-[300px]">
        <p className="font-bold text-2xl">Place</p>
        <p className="text-lg text-gray-500">174,688 Travelers</p>
      </div>
    </div>
  );
};
