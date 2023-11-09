import React, { useState } from "react";
import { BsPerson } from "react-icons/bs";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export const Login = () => {
  const [logInFormData, setLogInFormData] = useState({
    email_username: "",
    password: "",
  });

  const handleChange = (evt, key) => {
    setLogInFormData({
      ...logInFormData,
      [key]: evt.target.value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    evt.target.value = "";
    console.log("Form data:", logInFormData);
  };
  return (
    <div className="flex justify-center items-center flex-col gap-16 loginPage py-36">
      <div className="flex flex-col justify-center items-center gap-4">
        <p className="font-kalam text-6xl text-gray-100">LogIn</p>
        <p className="text-2xl text-gray-100">
          Please Enter your login Credentials!!
        </p>
      </div>
      <form
        className="flex flex-col gap-3 justify-center items-center"
        onSubmit={(evt) => {
          handleSubmit(evt);
        }}
      >
        <div className="flex justify-center items-center border-2 border-gray-300 rounded-lg h-14 gap-2 px-8 text-white">
          <BsPerson className="text-3xl text-gray-100" />
          <input
            type="text"
            placeholder="Username or Email . . ."
            className="outline-none w-[350px] p-1 bg-transparent"
            onChange={(evt) => {
              handleChange(evt, "email_username");
            }}
          />
        </div>
        <div className="flex justify-center items-center border-2 border-gray-300 rounded-lg h-14 gap-2 px-8 text-white">
          <RiLockPasswordLine className="text-3xl text-gray-100" />
          <input
            type="password"
            placeholder="Password"
            className="outline-none w-[350px] p-1 bg-transparent"
            onChange={(evt) => {
              handleChange(evt, "password");
            }}
          />
        </div>
        <div className="flex justify-center items-center gap-6 text-gray-200 mb-10">
          <Link to="/forgetpassword"> Forgot Password? </Link>
          <Link to="/signup"> Create a new account!! </Link>
        </div>
        <div className="border-2 border-green-600 w-[325px] rounded-lg h-12 flex items-center justify-center text-lg text-green-600 font-bold cursor-pointer">
          <button type="submit" className="h-full w-full">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};
