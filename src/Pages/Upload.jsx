import React from "react";
import { useState, useRef } from "react";
import { GrDocumentUpload } from "react-icons/gr";
import { Route, Routes } from "react-router-dom";
import { RiArrowDownSLine } from "react-icons/ri";
import { AiFillFile } from "react-icons/ai";
import axios from "axios";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

import { endpoint } from "../Schema";
import { ToastContainer, toast } from "react-toastify";
import BeatLoader from "react-spinners/BeatLoader ";
const Upload = () => {
  const hiddenFileInput = useRef(null);
  const [disp, usedisp] = useState("");
  const [courseCode, usecourseCode] = useState("");
  const [semester, usesemester] = useState("");
  const [level, uselevel] = useState("");
  const [session, usesession] = useState("");
  const [questionFile, usequestionFile] = useState("");

  const [filename, setfilename] = useState("");
  const [bol, setbol] = useState(false);

  /// For error
  const [course, setcourse] = useState(false);
  const [semes, setsemes] = useState(false);
  const [lev, setlev] = useState(false);
  const [ses, setses] = useState(false);
  const [ques, setques] = useState(false);
  const [messagecoursecode, setmessagecoursecode] = useState("");
  ///////////

  const handleClick = () => {
    setques(false);
    hiddenFileInput.current.click();
  };
  const handleChange = (event) => {
    let fileUploaded = event.target.files[0];
    console.log("sdfaadfsdf");
    const reader = new FileReader();
    reader.readAsDataURL(fileUploaded);
    reader.onload = () => {
      usequestionFile(reader.result);
    };

    setfilename(fileUploaded.name);
    let conver = fileUploaded.size / 1000000;
    console.log(conver);
    if (conver > 1.0) {
      usedisp(" ");
      toast.error("File size too large", {
        toastId: 5,
      });
    } else {
      usedisp("ok");
      console.log("fileupload");
    }
  };
  const uploaded = () => {
    const token = localStorage.getItem("token");
    console.log(token);
    if (courseCode == "") {
      setcourse(true);
      setmessagecoursecode("Fill up this space");
    }
    if (courseCode.length > 6) {
      setcourse(true);
      setmessagecoursecode("length is greater than 6");
    }
    if (semester == "") {
      setsemes(true);
    }
    if (level == "") {
      setlev(true);
    }
    if (session == "") {
      setses(true);
    }
    if (questionFile == "") {
      setques(true);
    }
    if (
      courseCode !== "" &&
      semester !== "" &&
      level !== "" &&
      session !== "" &&
      questionFile !== ""
    ) {
      window.scrollTo(0, 0);
      setbol(true);
      axios
        .post(
          `${endpoint}pastquestion/upload/`,
          {
            courseCode: courseCode.toUpperCase(),
            semester,
            level,
            session,
            questionFile,
          },
          { headers: { Authorization: `Token ${token}` } }
        )
        .then((response) => {
          // console.log(response);
          setbol(false); //stop loading
          usecourseCode(""); //to clear input
          usesemester("");
          uselevel("");
          usequestionFile(""); // to remove file
          usedisp(""); // to remove
          usesession("");
          toast.success("Upload Sucessful", { toastId: 1 });
        })
        .catch((error) => {
          setbol(false);
          usecourseCode(""); //to clear input
          usesemester("");
          uselevel("");
          usequestionFile(""); // to remove file
          usedisp(""); // to remove
          usesession("");
          if (
            error.response.data[0] ===
            "You can upload the same past questions more than once"
          ) {
            toast.error("Duplicated upload not allowed", {
              toastId: 3,
            });
          } else {
            toast.error("Upload Unsucessful", {
              toastId: 3,
            });
          }
          console.log(error);
        });
    }
  };
  const Logout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <>
      <div>
        <div className="fixed py-2 px-5 lg:py-1 md:px-2  bg-white shadow-sm md:shadow-md lg:shadow-lg   w-full">
          <div className="flex font-bold  items-center justify-between container mx-auto">
            <div className="flex items-center">
              <img src={logo} alt="" className="object-contain w-10 lg:" />{" "}
              <span className="flex flex-col leading-[1.2rem] pl-2">
                <span>Landmark University</span>
                <span>Resources Manager</span>
              </span>
            </div>
            <button
              onClick={() => Logout()}
              className=" p-2 text-sm lg:p-2 rounded bg-[#2E8B45] text-white  font-normal"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 lg:pt-20 container  xl:pl-0 xl:pr-0 lg:mx-auto  pt-8   md:pt-10">
        {bol ? (
          <div className="fixed flex justify-center items-center z-10 top-0   h-screen bg-white/75 left-0 right-0">
            <BeatLoader color="#16A34A" size={30} />
          </div>
        ) : (
          ""
        )}

        <div className="lg:mx-0 mx-auto">
          <h1 className="lg:mb-9 lg:mt-2 font-bold text-center mb-5 lg:text-start">
            Upload the PDF file with the information needed
          </h1>

          <div
            onClick={() => handleClick()}
            className={
              ques
                ? " mx-auto lg:mx-0 border-dashed bg-[#DFE8E1] border-2 border-red-500 h-72 w-64 md:w-72   rounded-lg flex flex-col justify-center items-center text-center"
                : " mx-auto lg:mx-0 border-dashed bg-[#DFE8E1] border-2 border-[#2F8D46] h-72 w-64 md:w-72  rounded-lg flex flex-col justify-center items-center text-center"
            }
          >
            {disp == "ok" ? (
              <AiFillFile color="green" size={35} />
            ) : (
              <GrDocumentUpload size={30} className="mb-3" />
            )}

            <input
              type="file"
              style={{ display: "none" }}
              ref={hiddenFileInput}
              onChange={handleChange}
            />

            {disp != "ok" ? <p>Click to Browse</p> : ""}
            {disp != "ok" ? <p>Files should be not</p> : ""}
            {disp != "ok" ? <p> more than 1mb</p> : ""}
            {disp == "ok" ? <p>{filename}</p> : ""}
          </div>
          {ques ? <p className="text-red-500">Upload a file</p> : ""}
        </div>
        <div className="grid lg:gap-x-12 xl:gap-x-12  gap-y-5 mb-5 md:grid-cols-2 md:mt-20 md:mb-5 lg:gap-y-24  md:justify-items-center md:items-center  lg:grid-cols-2 mt-5 justify-center lg:justify-items-center lg:items-center  lg:mx-0">
          <div className="">
            <label htmlFor="">Course Code</label>
            <div className="relative w-64">
              <input
                onClick={() => setcourse(false)}
                placeholder="e.g CSC211"
                onChange={(e) => usecourseCode(e.target.value)}
                value={courseCode}
                className={
                  course
                    ? " text-gray-900  border border-red-500 focus:border-red-500 w-full focus:outline-none appearance-none px-4 py-2 pr-8 rounded leading-tight "
                    : " text-gray-900  border  w-full   appearance-none px-4 py-2 pr-8 rounded leading-tight focus:outline-none "
                }
                id="inline-full-name"
                type="text"
              />
            </div>
            {course ? <p className="text-red-500">{messagecoursecode}</p> : ""}
          </div>
          <div className="holder">
            <label htmlFor="">Semester</label>
            <div className="relative w-64">
              <select
                onClick={() => setsemes(false)}
                onChange={(e) => usesemester(e.target.value)}
                value={semester}
                required
                className={
                  semes
                    ? " appearance-none w-full border-red-500  border px-4 py-2 pr-8 rounded  leading-tight focus:outline-none  text-gray-900"
                    : " appearance-none w-full  border px-4 py-2 pr-8 rounded  leading-tight  text-gray-900 focus:outline-none"
                }
              >
                <option value="" disabled selected hidden className=" ">
                  Select Semester
                </option>
                <option className="text-black" value="Alpha">
                  Alpha
                </option>
                <option className="text-black" value="Omega">
                  Omega
                </option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#D1D1D1]">
                <RiArrowDownSLine size={26} />
              </div>
            </div>
            {semes ? <p className="text-red-500">Fill up this space</p> : ""}
          </div>
          <div className="holder">
            <label htmlFor="">Level</label>
            <div className="relative w-64">
              <select
                value={level}
                onClick={() => setlev(false)}
                onChange={(e) => {
                  uselevel(e.target.value);
                }}
                required
                className={
                  lev
                    ? " appearance-none w-full border-red-500  border px-4 py-2 pr-8 rounded focus:outline-none  leading-tight  text-gray-900"
                    : " appearance-none w-full  border px-4 py-2 pr-8 rounded  leading-tight focus:outline-none text-gray-900"
                }
              >
                <option value="" disabled selected hidden className=" ">
                  Select Level
                </option>
                <option className="text-black" value="100">
                  100
                </option>
                <option className="text-black" value="200">
                  200
                </option>
                <option className="text-black" value="300">
                  300
                </option>
                <option className="text-black" value="400">
                  400
                </option>
                <option className="text-black" value="500">
                  500
                </option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2  text-[#D1D1D1]">
                <RiArrowDownSLine size={26} />
              </div>
            </div>
            {lev ? <p className="text-red-500">Fill up this space</p> : ""}
          </div>
          <div className="holder">
            <label htmlFor="">Session</label>
            <div className="relative w-64">
              <select
                value={session}
                onClick={() => setses(false)}
                onChange={(e) => {
                  usesession(e.target.value);
                }}
                required
                className={
                  ses
                    ? " appearance-none w-full border-red-500  border px-4 py-2 pr-8 rounded  leading-tight  text-gray-900 focus:outline-none"
                    : " appearance-none w-full  border px-4 py-2 pr-8 rounded  leading-tight  text-gray-900 focus:outline-none"
                }
              >
                <option value="" disabled selected hidden className=" ">
                  Select Session
                </option>
                <option className="text-black" value="2011/2012">
                  2011/2012
                </option>
                <option className="text-black" value="2012/2013">
                  2012/2013
                </option>
                <option className="text-black" value="2013/2014">
                  2013/2014
                </option>
                <option className="text-black" value="2014/2015">
                  2014/2015
                </option>
                <option className="text-black" value="2015/2016">
                  2015/2016
                </option>
                <option className="text-black" value="2016/2017">
                  2016/2017
                </option>
                <option className="text-black" value="2017/2018">
                  2017/2018
                </option>
                <option className="text-black" value="2018/2019">
                  2018/2019
                </option>
                <option className="text-black" value="2019/2020">
                  2019/2020
                </option>
                <option className="text-black" value="2020/2021">
                  2020/2021
                </option>
                <option className="text-black" value="2021/2022">
                  2021/2022
                </option>
                <option className="text-black" value="2022/2023">
                  2022/2023
                </option>
                <option className="text-black" value="2023/2024">
                  2023/2024
                </option>{" "}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#D1D1D1]">
                <RiArrowDownSLine size={26} />
              </div>
            </div>
            {ses ? <p className="text-red-500">Fill up this space</p> : ""}
          </div>
          <button
            onClick={() => uploaded()}
            className=" text-white bg-[#2E8B45] rounded md:col-span-2 md:px-20 md:py-5 lg:px-20 lg:py-2 mt-5 lg:mt-0  py-4 mb-6 "
          >
            Upload
          </button>
        </div>
      </div>
    </>
  );
};

export default Upload;
