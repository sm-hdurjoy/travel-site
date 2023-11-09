import React from "react";
import { Link } from "react-router-dom";
import PlaneIcon from "../assets/plane.png";
import { FaFacebookSquare } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { BiLogoLinkedin } from "react-icons/bi";
import { TbSend } from "react-icons/tb";
import { PiCopyright } from "react-icons/pi";

export const Footer = () => {
  return (
    <div className="bg-slate-900 py-10">
      <div className="flex gap-10 bg-slate-900 text-gray-300  m-9  justify-evenly ">
        <div className="flex flex-col gap-8 justify-center">
          <div>
            <Link to="/" className="flex text-white items-center">
              <img src={PlaneIcon} alt="icon" className="w-8 h-8" />
              <p className="font-kalam text-2xl p-2 mt-1.5">Trisog</p>
            </Link>
          </div>
          <div>
            <p className="font-allura text-2xl font-semibold text-white">
              Need Any Help?
            </p>
            <p className="font-bold text-white">
              Call Us: <span className="text-yellow-400">(888)1234 5678</span>
            </p>
          </div>
          <div>
            <p>Love Street, Muscat, Oman</p>
            <p>example@trisog.com</p>
          </div>
          <div className="flex gap-4 text-white text-xl">
            <FaFacebookSquare className="cursor-pointer" />
            <BsTwitter className="cursor-pointer" />
            <BiLogoLinkedin className="cursor-pointer" />
          </div>
        </div>
        <span className="border-[1px] border-gray-700 rounded-full"></span>
        <div className="flex gap-20 items-center">
          <div className="flex flex-col gap-6">
            <p className="font-allura text-3xl font-semibold text-white">
              Company
            </p>
            <p>About Us</p>
            <p>Contact Us</p>
            <p>Travel Guides</p>
            <p> Data Policy</p>
          </div>
          <div className="flex flex-col gap-6">
            <p className="font-allura text-3xl font-semibold text-white">
              Top Destination
            </p>
            <p>Las Vegas</p>
            <p>New York</p>
            <p>San Francisco</p>
            <p>Hawai</p>
          </div>
          <div className="flex flex-col gap-6">
            <p>Tokyo</p>
            <p>Sydney</p>
            <p>Melborn</p>
            <p>Dubai</p>
          </div>
        </div>
        <span className="border-[1px] border-gray-700 rounded-full"></span>
        <div className="flex flex-col justify-center gap-6">
          <p className="font-allura text-3xl  text-white">Sign up Newsletter</p>
          <div className="flex gap-3 flex-col mb-4">
            <div className="flex items-center bg-white h-10 gap-3 px-2 rounded-lg">
              <TbSend className="text-xl text-gray-500" />
              <input
                type="text"
                placeholder="Enter Email . . ."
                className="bg-transparent outline-none text-gray-500"
              />
            </div>
            <button className=" bg-yellow-300 text-gray-500 h-10 w-36 rounded-lg text-lg font-semibold">
              Submit
            </button>
          </div>
          <div className="flex justify-center items-center gap-2">
            <PiCopyright />
            <p>2023 Trisog All Right Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};
