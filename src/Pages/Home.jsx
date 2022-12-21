import React from "react";
import loade from "../assets/load.gif";
import logo from "../assets/logo.png";
import { FiSearch } from "react-icons/fi";
import { AiOutlineDownload } from "react-icons/ai";
import axios from "axios";
import { useEffect, useState } from "react";
import { saveAs } from "file-saver";
import { endpoint } from "../Schema";

import "./home.css";
const Home = () => {
  const [array, setarray] = useState([]);
  const [bol, setbol] = useState(false);

  const Search = (val) => {
    if (val == "") {
      setarray([]);
      array.length = 0;
    } else {
      setbol(true);
      axios
        .get(`${endpoint}pastquestion/?search=${val}`)
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
    }
  };
  const Download = (file) => {
    console.log(file.questionFile);
    saveAs(file.questionFile, file.courseCode);
    console.log(file.questionFile);
  };

  return (
    <div className="imag">
      <div className=" h-screen w-screen  lg:mx-auto  flex  items-center flex-col pt-16 lg:pt-10  md:pt-20 sm:pt-28">
        <img src={logo} alt="" className="object-contain w-20 lg:" />
        <p className="text-xl lg:text-2xl font-bold text-black">
          Landmark University
        </p>
        <p className="text-lg lg:text-xl font-bold text-black">
          Resource Manager
        </p>
        {/* Search  */}

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
        {/* List */}

        {bol ? (
          <img src={loade} alt="" className="w-10 object-contain mt-5" />
        ) : (
          <div className="md:mt-5 mt-3">
            {array.length !== 0 ? (
              <div className="overflow-y-auto lg:w-[846px] max-h-[40vh] xl:w-[1020px] w-[90vw] rounded-md  bg-white">
                <table className="table-auto   w-full  bg-white text-center ">
                  <thead className="drop-shadow  sticky top-0     bg-white font-normal text-xs md:text-base">
                    <tr>
                      <th scope="col" className="sticky top-0  px-1">
                        Course
                      </th>
                      <th scope="col" className="sticky top-0  px-1">
                        Semester
                      </th>
                      <th scope="col" className="sticky top-0 px-1">
                        Level
                      </th>
                      <th scope="col" className="sticky top-0 px-1">
                        Session
                      </th>
                      <th scope="col" className="sticky top-0 px-1">
                        Download
                      </th>
                    </tr>
                  </thead>
                  <tbody className="   ">
                    {array.map((arr, i) => (
                      <tr className="hover:bg-gray-50 text-xs md:text-base">
                        <td className="py-2 px-3 md:px-4 lg:px-6">
                          {arr.courseCode}
                        </td>
                        <td className="py-2 px-3 md:px-4 lg:px-6">
                          {arr.semester}
                        </td>
                        <td className="py-2 px-3 md:px-4 lg:px-6">
                          {arr.level}
                        </td>
                        <td className="py-2 px-3 md:px-4 lg:px-6">
                          {arr.session}
                        </td>
                        <td className="py-2 px-3 md:px-4 lg:px-6">
                          <a href="#">
                            <AiOutlineDownload
                              onClick={() => Download(arr)}
                              className="mx-auto"
                            />
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              ""
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
