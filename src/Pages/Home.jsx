import React from "react";
import loade from "../assets/load.gif";
import logo from "../assets/logo.png";
import { FiSearch } from "react-icons/fi";
import { AiOutlineDownload } from "react-icons/ai";
import axios from "axios";
import { useEffect, useState } from "react";
import fileDownload from "js-file-download";
import { saveAs } from "file-saver";

const Home = () => {
  const [array, setarray] = useState([]);
  const [bol, setbol] = useState(false);

  const Search = (val) => {
    setbol(true);
    axios
      .get(
        `https://lurm-backend-production.up.railway.app/api/v1/pastquestion/?search=${val}`
      )
      .then((res) => {
        console.log(res);
        if (val != "") {
          setarray(res.data);
          setbol(false);
        } else {
          setarray([]);
          setbol(false);
        }
      })
      .catch((error) => {
        console.log(error);
        setbol(false);
      });
  };
  const Download = (file) => {
    console.log(file.questionFile);
    saveAs(file.questionFile, `${file.courseCode}.pdf`);
    // fileDownload(file.questionFile, `${file.courseCode}`);
    console.log(file.questionFile);
  };

  return (
    <div className=" h-screen w-screen  lg:mx-auto  flex  items-center flex-col pt-16 lg:pt-10 sm:pt-32">
      <img src={logo} alt="" className="object-contain w-20 lg:" />
      <p className="text-xl lg:text-2xl font-bold text-black">
        Landmark University
      </p>
      <p className="text-lg lg:text-xl font-bold text-black">
        Resource Manager
      </p>
      {/* Search  */}

      <div className="relative w-[87%]  sm:w-[89%] lg:w-[82%] xl:w-[75%] mt-14">
        <FiSearch
          size={22}
          color="green"
          className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
        />
        <input
          placeholder="search past questions by course code"
          onChange={(e) => Search(e.target.value)}
          type="text"
          className="w-full py-2 pl-12 pr-4 text-black border rounded-lg outline-none bg-gray-50 focus:bg-white focus:border-green-600"
        />
      </div>
      {/* List */}
      {bol ? (
        <img src={loade} alt="" className="w-10 object-contain mt-5" />
      ) : (
        <div>
          <div className=" w-[90vw] lg:w-[82vw] bg-white  xl:w-[75vw]  mt-5 flex flex-col rounded-lg   ">
            {array.length !== 0 ? (
              <div className="flex justify-evenly bg-white  xl:w-auto xl:pl-10 items-center text-[12px] mt-2 text-gray-500 lg:text-base w-[90vw] border-b-[0.1px] lg:w-[82vw]  border-gray-200  ">
                <p>Course</p>
                <p>Semester</p>
                <p>Level</p>
                <p>Session</p>
                <p className="sm:hidden">download</p>
                <span className="hidden sm:block">
                  <p className="flex  ">Click to download</p>
                </span>
              </div>
            ) : (
              ""
            )}
            <div className=" max-h-[40vh]  overflow-y-scroll rounded-lg">
              {array.map((arr, i) => (
                <div
                  key={i}
                  className="flex justify-evenly items-center text-[12px] lg:text-[15px] lg:w-[72vw] ml-2 w-[86vw] sm:w-[85vw]  bg-white pt-3 rounded-lg text-black  font-semibold pb-5 "
                >
                  <p>{arr.courseCode}</p>
                  <p>{arr.semester}</p>
                  <p>{arr.level}</p>
                  <p>{arr.session}</p>

                  <AiOutlineDownload
                    onClick={() => Download(arr)}
                    size="16"
                    className="sm:text-5xl "
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
