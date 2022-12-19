import React from "react";
import logo from "../assets/logo.png";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineKey } from "react-icons/hi";
const Auth = () => {
  return (
    <div className="flex flex-col items-center  h-screen w-screen ">
      <div className="flex mt-14 sm:mt-14 md:mt-24">
        <img src={logo} alt="" className="object-contain w-14 mr-5" />
        <div>
          <p className="text-lg lg:text-xl font-bold text-black">
            Landmark University
          </p>
          <p className="text-lg lg:text-xl font-bold text-black">
            Resource Manager
          </p>
        </div>
      </div>
      <div className="  sm:mt-14  md:mt-16  mt-14 w-[20rem] h-[23rem] md:h-[24rem] lg:w-[30rem] lg:h-[24rem] sm:w-[30rem] xl:h-[26rem] xl:w-[30rem]   bg-white shadow-lg rounded-lg flex flex-col items-center ">
        <div className="relative w-72 sm:w-[25rem] mt-20 ">
          <label htmlFor="">username</label>
          <AiOutlineUser
            size={20}
            color="green"
            className="absolute top-8 right-2 "
          />
          <input
            placeholder="aremu.charity"
            className="border p-2 rounded-md w-full  focus:outline-[#D1D1D1]"
            type="text"
          />
        </div>
        <div className="relative w-72 mt-5 xl:mt-6 sm:w-[25rem]">
          <label htmlFor="">Password</label>
          <HiOutlineKey
            size={20}
            color="green"
            className="absolute top-8 right-2"
          />
          <input
            placeholder="aremu.charity"
            className="border p-2 rounded-md w-full focus:outline-[#D1D1D1] "
            type="text"
          />
        </div>
        <button className="w-72 py-1 xl:py-2 sm:w-[25rem] bg-[#2F8B33] rounded-lg mt-10 xl:mt-12 text-white text-sm">
          Log in
        </button>
      </div>
    </div>
  );
};

export default Auth;
