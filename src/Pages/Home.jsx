import React from "react";

import logo from "../assets/logo.png";
import { FiSearch } from "react-icons/fi";
import { AiOutlineDownload } from "react-icons/ai";
const Home = () => {
  const [array, setarray] = React.useState([
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
  ]);
  return (
    <div className="max-w-[1240px] h-full   lg:mx-auto  flex justify-center items-center flex-col">
      <img src={logo} alt="" className="object-contain w-20 lg:" />
      <p className="text-xl lg:text-2xl font-bold text-black">
        Landmark University
      </p>
      <p className="text-lg lg:text-xl font-bold text-black">
        Resource Manager
      </p>
      {/* Search  */}
      <div className="bg-white h-26 w-[90vw] h-10 flex justify-center items-center shadow-xl rounded-lg  mt-10 ">
        <div class="absolute  left-2 bottom- flex items-center pl-3 ml-2 rounded-lg">
          <FiSearch size={22} color="green" />
        </div>
        <input
          type="text"
          id="name"
          className=" text-gray-900 text-sm rounded-  block w-full pl-10 py-2.5  rounded-lg   "
          placeholder="search past questions by course code"
        />
      </div>
      {/* List */}
      <div className="bg-white w-[90vw] mt-5 flex flex-col rounded-lg   ">
        <div className="flex justify-evenly items-center text-[12px] mt-2 text-gray-500  w-[90vw] border-b-[0.1px]  border-gray-200  ">
          <p>course</p>
          <p>Semester</p>
          <p>Level</p>
          <p>Session</p>
          <p className="">
            <AiOutlineDownload className="mt-2" />
          </p>
        </div>
        <div className=" max-h-[40vh]  overflow-y-scroll rounded-lg">
          {array.map((arr, i) => (
            <div className="flex justify-evenly items-center text-[12px]  w-[90vw] bg-white pt-3 rounded-lg text-black  font-bold ">
              <p>CSC211</p>
              <p>Alpha</p>
              <p>200</p>
              <p>2022/2023</p>
              <p>
                <AiOutlineDownload onClick={() => alert("helloo")} size="16"/>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
