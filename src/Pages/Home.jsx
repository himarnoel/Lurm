import React from "react";

import logo from "../assets/logo.png";
import { FiSearch } from "react-icons/fi";
import { AiOutlineDownload } from "react-icons/ai";
import axios from "axios";
const Home = () => {
  const [array, setarray] = React.useState([]);

  const Search = (val) => {
    axios
      .get(
        ` https://lurm-backend.onrender.com/api/v1/pastquestion/?search=${val}`
      )
      .then((res) => {
        console.log(res);
        // setarray(res.data);
      });
  };

  return (
    <div className=" h-screen w-screen  lg:mx-auto  flex justify-center items-center flex-col">
      <img src={logo} alt="" className="object-contain w-20 lg:" />
      <p className="text-xl lg:text-2xl font-bold text-black">
        Landmark University
      </p>
      <p className="text-lg lg:text-xl font-bold text-black">
        Resource Manager
      </p>
      {/* Search  */}
      <div className="bg-white h-26 w-[90vw]  xl:w-[75vw]  lg:w-[82vw] h-10 flex justify-center items-center shadow-xl rounded-lg  mt-10 xl:mt-24 2xl:mt-28 md:mt-28">
        <div class="absolute  left-2 bottom- flex items-center pl-3 ml-2 rounded-lg">
          <FiSearch
            size={22}
            color="green"
            className="sm:ml-4 lg:ml-[4.5rem] xl:ml-[9.8rem] 2xl:ml-[10.9rem]"
          />
        </div>
        <input
          type="text"
          id="name"
          className=" focus:outline-white  text-gray-900 text-sm rounded-  block w-full pl-10 py-2.5  rounded-lg focus:border-   "
          placeholder="search past questions by course code"
          onChange={(e) => Search(e.target.value)}
        />
      </div>
      {/* List */}
      <div className=" w-[90vw] lg:w-[82vw] bg-white  xl:w-[75vw]  mt-5 flex flex-col rounded-lg   ">
        {array.length !== 0 ? (
          <div className="flex justify-evenly bg-white  xl:w-auto xl:pl-10 items-center text-[12px] mt-2 text-gray-500 lg:text-base w-[90vw] border-b-[0.1px] lg:w-[82vw]  border-gray-200  ">
            <p>Course</p>
            <p>Semester</p>
            <p>Level</p>
            <p>Session</p>
            <p className="sm:hidden">
              <AiOutlineDownload className="mt-2" />
            </p>
            <span className="hidden sm:block">
              <p className="flex  ">
                Click
                <AiOutlineDownload className="mt-[5px] mx-2" />
                to download
              </p>
            </span>
          </div>
        ) : (
          ""
        )}
        <div className=" max-h-[40vh]  overflow-y-scroll rounded-lg">
          {array.map((arr, i) => (
            <div
              key={i}
              className="flex justify-evenly items-center text-[12px] lg:w-[72vw] ml-2 w-[86vw] sm:w-[85vw]  bg-white pt-3 rounded-lg text-black  font-bold "
            >
              <p>{arr.courseCode}</p>
              <p>{arr.semester}</p>
              <p>{arr.level}</p>
              <p>{arr.session}</p>
              <p className="">
                <AiOutlineDownload
                  onClick={() => alert("helloo")}
                  size="16"
                  className="sm:text-5xl "
                />
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
