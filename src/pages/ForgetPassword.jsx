import React, { useState } from "react";
import { BsPerson } from "react-icons/bs";

export const ForgetPassword = () => {
  const [forgetPasswordFormData, setForgetPasswordFormData] = useState({
    email: "",
  });

  const handleChange = (evt) => {
    setForgetPasswordFormData({
      ...forgetPasswordFormData,
      email: evt.target.value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    evt.target.value = "";
    console.log(evt.target.value);
    console.log("Form data:", forgetPasswordFormData);
  };

  return (
    <div className="flex justify-center items-center flex-col gap-10 loginPage py-36">
      <div className="flex flex-col justify-center items-center gap-4">
        <p className="font-kalam text-6xl text-gray-100">
          Forgotten your password ?
        </p>
        <p className="text-2xl text-gray-100">Don't worry! WE GOT YOU!!</p>
      </div>
      <form
        className="flex flex-col gap-3 justify-center items-center"
        onSubmit={handleSubmit}
      >
        <div className="flex justify-center items-center border-2 border-gray-300 rounded-lg h-14 gap-2 px-4 text-white mb-8">
          <BsPerson className="text-3xl text-gray-100" />

          <input
            type="text"
            placeholder="Email or Username"
            className="outline-none w-[345px] p-1 bg-transparent"
            onChange={handleChange}
          />
        </div>

        <div className="border-2 border-green-600 w-[325px] rounded-lg h-12 flex items-center justify-center text-lg text-green-600 font-bold">
          <button type="submit" className="h-full w-full">
            Reset Your Password
          </button>
        </div>
      </form>
    </div>
  );
};
