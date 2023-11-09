import React from "react";
import Carouselmage from "../assets/carousel-image-2-1.jpg";
import { AiFillStar } from "react-icons/ai";
import { BsClock } from "react-icons/bs";
import { GrFavorite } from "react-icons/gr";

export const TourDetailCarousel = () => {
  return (
    <div className="mt-6">
      <div className="bg-gray-100">
        <div className="justify-center items-center flex">
          <div className="absolute text-2xl bg-white p-2.5 rounded-full top-10">
            <GrFavorite />
          </div>
          <img src={Carouselmage} alt="" className="" />
        </div>
        <div className="flex flex-col p-6 gap-2">
          <div className="text-gray-500 text-lg">
            <p>Budapest, Hungary</p>
          </div>
          <div className="text-2xl font-bold text-blue-950 mb-2">
            <p>Wonders of the West</p>
            <p>Coast & Kimberley</p>
          </div>
          <div className="flex justify-between border-b-2 pb-4">
            <div className="flex gap-3 items-center">
              <div className="text-blue-950 flex items-center bg-yellow-400 py-1 rounded-lg px-2">
                <AiFillStar />
                <p>4.8</p>
              </div>
              <div className="text-gray-500">
                <p>15 reviews</p>
              </div>
            </div>
            <div className="text-gray-500 flex items-center gap-2">
              <BsClock />
              <p>7Days</p>
            </div>
          </div>
          <div className="flex justify-between items-center mt-2">
            <div className="text-gray-400">
              <p>Starting From</p>
            </div>
            <div className="text-blue-950 font-allura text-2xl font-bold">
              <p>$ 520</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
