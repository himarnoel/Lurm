import React, { useState } from "react";
import logo from "../assets/logo.png";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import { AiOutlineDownload } from "react-icons/ai";
import { saveAs } from "file-saver";
import axios from "axios";
import { endpoint } from "../Schema";
import BeatLoader from "react-spinners/BeatLoader ";
import Nav from "./../components/Nav";
import Footen from "./../components/Footen";

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
    <div className=" h-screen bg-[url('/src/assets/bg.png')] bg-no-repeat bg-center bg-cover">
      <div className="h-screen w-screen flex  items-center flex-col sm:pt-0 justify-between">
        {/*NAVIGATION BAR */}
        <Nav />
        <div className="absolute lg:top-[12rem] top-[13rem] sm:top-[20rem] md:top-[8rem]  w-[100vw]">
          {/* Search bar*/}
          <div className="relative w-[89%]  mx-auto md:mt-64  lg:mt-[0rem] lg:w-[846px] xl:w-[1020px] rounded-lg">
            <FiSearch
              size={22}
              color="green"
              className="absolute top-0 bottom-0 sm:w-6 sm:h-6 h-5 w-5  my-auto text-gray-400 left-3 "
            />
            <input
              placeholder="search past questions by course code"
              onChange={(e) => Search(e.target.value)}
              type="text"
              className="w-full  py-[0.24rem] sm:py-2 pl-12 pr-4 text-black border rounded-lg shadow outline-none bg-gray-50 focus:bg-white focus:border-transparent"
            />
          </div>
          {bol ? (
            <div className="mx-auto flex justify-center mt-10 md:mt-20 ">
              <BeatLoader color="#16A34A" size={17} />
            </div>
          ) : (
            <div className="md:mt-8 mt-3 mx-auto ">
              {array.length !== 0 ? (
                <div className=" mx-auto overflow-y-auto lg:w-[846px] max-h-[40vh] xl:w-[1020px] w-[90vw] rounded-md  bg-white">
                  <table className="table-auto   w-full  bg-white text-center ">
                    <thead className="drop-shadow  sticky top-0  bg-white font-normal text-xs md:text-base">
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
                        <tr
                          key={i}
                          className="hover:bg-gray-50 text-xs md:text-base"
                        >
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
                            <Link to="">
                              <AiOutlineDownload
                                onClick={() => Download(arr)}
                                className="mx-auto"
                              />
                            </Link>
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

        <Footen />
      </div>
    </div>
  );
};

export default Home;
