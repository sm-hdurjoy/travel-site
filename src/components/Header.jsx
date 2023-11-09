import { NavBar } from "./NavBar.jsx";
import { Banner } from "./Banner";
import React from "react";

export const Header = () => {
  return (
    <div>
      <Banner />
      <NavBar />
    </div>
  );
};
