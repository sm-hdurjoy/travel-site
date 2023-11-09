import React from "react";
import { Link, NavLink } from "react-router-dom";
import PlaneIcon from "../assets/plane.png";
import Profile from "../assets/profile.png";
import { BiSearchAlt } from "react-icons/bi";

export const NavBar = () => {
  return (
    <div className="flex px-12 justify-between items-center py-2">
      <div className="flex items-center gap-24 p-2">
        <Link to="/" className="flex items-center justify-center gap-3">
          <img src={PlaneIcon} alt="icon" className="w-12 h-12" />
          <p className="font-kalam text-4xl p-1 mt-2">Trisog</p>
        </Link>
        <div className="flex gap-4 text-lg p-2 font-semibold text-gray-500">
          <NavLink className="px-2 py-2 hover:text-custom-red" to="/">
            Home
          </NavLink>
          <NavLink className="px-2 py-2 hover:text-custom-red" to="about">
            About
          </NavLink>
          <NavLink className="px-2 py-2 hover:text-custom-red" to="tours">
            Tours
          </NavLink>
          <NavLink className="px-2 py-2 hover:text-custom-red" to="destination">
            Destination
          </NavLink>
          <NavLink className="px-2 py-2 hover:text-custom-red" to="blog">
            Blog
          </NavLink>
          <NavLink className="px-2 py-2 hover:text-custom-red" to="pages">
            Pages
          </NavLink>
          <NavLink className="px-2 py-2 hover:text-custom-red" to="contacts">
            Contacts
          </NavLink>
        </div>
      </div>
      <div className="flex items-center text-lg gap-1 p-1 font-bold">
        <BiSearchAlt className="text-2xl font-bold mt-1 text-gray-700 cursor-pointer" />

        <NavLink
          to="/login"
          className="flex items-center gap-1 p-2 cursor-pointer"
        >
          <img src={Profile} alt="profile-avatar" className="w-8 h-8" />
          <p className="p-1 text-gray-500 hover:text-red-700">Login / Signup</p>
        </NavLink>
      </div>
    </div>
  );
};
