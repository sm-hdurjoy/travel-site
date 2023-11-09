import React from "react";

import { BsTwitter } from "react-icons/bs";
import {
  BiLogoLinkedin,
  BiLogoGoogle,
  BiLogoPinterestAlt,
  BiChevronDown,
} from "react-icons/bi";

export const Banner = () => {
  return (
    <div className="flex justify-between bg-gray-100 px-12 py-2 text-gray-500">
      <div className="flex gap-3">
        <p>(000)999-898-999</p>
        <span className="border-[1px] h-6 border-gray-300 rounded-full"></span>
        <p>info@trisog.com</p>
      </div>
      <div className="flex gap-3">
        <div className="flex items-center justify-center gap-2.5">
          <BsTwitter />
          <BiLogoLinkedin />
          <BiLogoGoogle />
          <BiLogoPinterestAlt />
        </div>
        <span className="border-[1px] h-6 border-gray-300 rounded-full"></span>
        <div className="flex items-center gap-1">
          <p className="font-semibold">EUR</p>
          <div className="flex top-5">
            <BiChevronDown className="mt-1" />
          </div>
        </div>
      </div>
    </div>
  );
};
