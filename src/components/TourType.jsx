import React from "react";
import { MdOutlinePeopleAlt } from "react-icons/md";

export const TourType = () => {
  return (
    <div className="bg-white flex flex-col justify-center items-center px-10 py-6 gap-4">
      <div className="p-3 rounded-full bg-yellow-300">
        <MdOutlinePeopleAlt className="text-5xl" />
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className="text-xl font-bold">City Tours</p>
        <p>10 Tour +</p>
      </div>
    </div>
  );
};
