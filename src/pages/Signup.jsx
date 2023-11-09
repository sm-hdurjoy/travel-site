import React, { useState } from "react";
import { BsPerson } from "react-icons/bs";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export const Signup = () => {
  const [signUpInFormData, setSignUpInFormData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
  });

  const handleChange = (evt, key) => {
    setSignUpInFormData({
      ...signUpInFormData,
      [key]: evt.target.value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    evt.target.value = "";
    console.log("Form data:", signUpInFormData);
  };
  return (
    <div className="flex justify-center items-center flex-col gap-16 loginPage py-36">
      <div className="flex flex-col justify-center items-center gap-4">
        <p className="font-kalam text-6xl text-gray-100">SignUp</p>
        <p className="text-2xl text-gray-100">
          Enter Credentials to create a new Account!!
        </p>
      </div>
      <form
        className="flex flex-col gap-3 justify-center items-center"
        onSubmit={(evt) => {
          handleSubmit(evt);
        }}
      >
        <div className="flex gap-4">
          <div className="flex justify-center items-center border-2 border-gray-300 rounded-lg h-14 gap-2 px-4 text-white">
            <input
              type="text"
              placeholder="First Name"
              className="outline-none w-[146px] p-1 bg-transparent"
              onChange={(evt) => {
                handleChange(evt, "firstName");
              }}
            />
          </div>
          <div className="flex justify-center items-center border-2 border-gray-300 rounded-lg h-14 gap-2 px-4 text-white">
            <input
              type="text"
              placeholder="Last Name"
              className="outline-none w-[146px] p-1 bg-transparent"
              onChange={(evt) => {
                handleChange(evt, "lastName");
              }}
            />
          </div>
        </div>
        <div className="flex justify-center items-center border-2 border-gray-300 rounded-lg h-14 gap-2 px-4 text-white">
          <input
            type="text"
            placeholder="User Name"
            className="outline-none w-[345px] p-1 bg-transparent"
            onChange={(evt) => {
              handleChange(evt, "userName");
            }}
          />
        </div>
        <div className="flex justify-center items-center border-2 border-gray-300 rounded-lg h-14 gap-2 px-4 text-white">
          <input
            type="text"
            placeholder="Email"
            className="outline-none w-[345px] p-1 bg-transparent"
            onChange={(evt) => {
              handleChange(evt, "email");
            }}
          />
        </div>
        <div className="flex justify-center items-center border-2 border-gray-300 rounded-lg h-14 gap-2 px-4 text-white">
          <input
            type="text"
            placeholder="Password"
            className="outline-none w-[345px] p-1 bg-transparent"
            onChange={(evt) => {
              handleChange(evt, "password");
            }}
          />
        </div>
        <div className="flex justify-center items-center border-2 border-gray-300 rounded-lg h-14 gap-2 px-4 text-white mb-10">
          <input
            type="text"
            placeholder="Confirm Password"
            className="outline-none w-[345px] p-1 bg-transparent"
            onChange={(evt) => {
              handleChange(evt, "confirmPassword");
            }}
          />
        </div>
        <div className="border-2 border-green-600 w-[325px] rounded-lg h-12 flex items-center justify-center text-lg text-green-600 font-bold">
          <button type="submit" className="h-full w-full">
            Create New Account
          </button>
        </div>
      </form>
    </div>
  );
};
