import React from "react";
import logo from "../assets/logo.png";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineKey } from "react-icons/hi";
const Auth = () => {
  return (
    <div className="flex flex-col items-center  h-screen w-screen ">
      <div className="flex mt-14 sm:mt-10 md:mt-12">
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
      <div className="  sm:mt-10   md:mt-12  mt-14 w-[20rem] h-[20rem]  md:w-[23rem] md:h-[20rem] lg:w-[22rem] lg:h-[20rem] sm:w-[24rem] xl:h-[20rem] xl:w-[25rem]   bg-white shadow-lg rounded-lg flex flex-col items-center ">
        <div className="xl:w-[22rem] w-[17rem]">
          <div className="relative  w-full mt-10 xl:mt-10">
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
          <div className="relative w-full mt-5">
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
          <button className=" py-1 xl:py-2 w-full bg-[#2F8B33] rounded-lg mt-10 xl:mt-12 text-white text-sm">
            Log in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
