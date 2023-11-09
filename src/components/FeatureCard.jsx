import React from "react";
import { MdOutlinePeopleAlt } from "react-icons/md";

export const FeatureCard = ({ title }) => {
  return (
    <div className="flex  flex-col gap-2 w-96 bg-white p-8 shadow-lg">
      <MdOutlinePeopleAlt className="text-4xl"/>
      <p className="text-xl font-bold">{title}</p>
      <p className="font-semibold text-gray-500">
        Credibly target visionary portals rther than prospective human capital.
      </p>
    </div>
  );
};
