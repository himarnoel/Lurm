import React from "react";
import "./home.css";
import { FiSearch } from "react-icons/fi";
import { AiOutlineDownload } from "react-icons/ai";

const Homer = () => {
  return (
    <div className=" h-screen bg-[url('/src/assets/bg.png')] bg-no-repeat bg-center bg-cover">
      <div className="h-screen w-screen">
        {/*NAVIGATION BAR */}
        <div className="lg:w-screen py-1 px-10 bg-white shadow-lg">
          <div className="flex font-bold">
            <img src={logo} alt="" className="object-contain w-14 lg:" />{" "}
            <span className="flex flex-col leading-[1.2rem] pt-3 pl-2">
              <span>Landmark University</span>
              <span>Resources Manager</span>
            </span>
          </div>
        </div>

        {/* Search bar */}
        <div className="relative w-[89%]   lg:w-[846px] xl:w-[1020px] mt-14">
          <FiSearch
            size={22}
            color="green"
            className="absolute top-0 bottom-0 w-4 h-4 md:w-6 md:h-6 my-auto text-gray-400 left-3"
          />
          <input
            placeholder="search past questions by course code"
            onChange={(e) => Search(e.target.value)}
            type="text"
            className="w-full md:py-2 py-[0.2rem] pl-12 pr-4 text-black border rounded-lg outline-none bg-gray-50 focus:bg-white focus:border-green-600"
          />
        </div>
      </div>
    </div>
  );
};

export default Homer;
