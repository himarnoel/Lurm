import React from "react";
import { useState, useRef } from "react";
import { GrDocumentUpload } from "react-icons/gr";
import { Route, Routes } from "react-router-dom";
import { RiArrowDownSLine } from "react-icons/ri";
import { AiFillFile } from "react-icons/ai";
import axios from "axios";

import loade from "../assets/load.gif";
import Toaster from "../components/Toast";
import { endpoint } from "../Schema";
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
  const [mess, setmess] = useState("");
  /// For error
  const [course, setcourse] = useState(false);
  const [semes, setsemes] = useState(false);
  const [lev, setlev] = useState(false);
  const [ses, setses] = useState(false);
  const [ques, setques] = useState(false);
  ///////////

  const handleClick = () => {
    setques(false);
    hiddenFileInput.current.click();
  };
  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(fileUploaded);
    reader.onload = () => {
      usequestionFile(reader.result);
    };

    setfilename(fileUploaded.name);
    let conver = fileUploaded.size / 1000000;
    console.log(conver);
    if (conver > 1.0) {
      settoast(true);
      setmess("File size too large");
    } else {
      usedisp("ok");
      console.log("fileupload");
    }
  };
  const uploaded = () => {
    // console.log(formData);
    const access = localStorage.getItem("access");
    console.log(access);
    if (courseCode == "") {
      setcourse(true);
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
      setbol(true);
      axios
        .post(
          `${endpoint}pastquestion/upload/`,
          {
            courseCode,
            semester,
            level,
            session,
            questionFile,
          },
          { headers: { Authorization: `Bearer ${access}` } }
        )
        .then((response) => {
          // console.log(response);
          settoast(true); //show toast
          setbol(false); //stop loading
          usecourseCode(""); //to clear input
          usesemester("");
          uselevel("");
          usequestionFile(""); // to remove file
          usedisp(""); // to remove
          usesession("");
          if (response.status == 201) {
            settoast(true);
            setmess("Upload Sucessful");
            console.log(response.data);
          } else {
            settoast(true);
            setmess("Upload Error");
          }
        })
        .catch((error) => {
          setbol(false);
          usecourseCode(""); //to clear input
          usesemester("");
          uselevel("");
          usequestionFile(""); // to remove file
          usedisp(""); // to remove
          usesession("");

          settoast(true);
          // setmess(error.response.statusText);
          setmess("Can't Upload");
          console.log(error);
        });
    }
  };
  const [toast, settoast] = useState(false);
  setTimeout(() => {
    settoast(false);
  }, 7000);

  return (
    <>
      {toast ? <Toaster mess={mess} close={() => settoast(false)} /> : ""}

      <div className="grid lg:grid-cols-2  lg:max-w-[1020px] lg:pl-5 lg:pr-8 xl:pl-0 xl:pr-0 lg:mx-auto  pt-5   md:pt-10">
        {bol ? (
          <div className="absolute flex justify-center items-center z-10 top-0 lg:h-[100%] h-screen bg-white/75 left-0 right-0">
            <img src={loade} alt="" srcset="" className="object-contain " />
          </div>
        ) : (
          ""
        )}

        <div className="lg:mx-0 mx-auto ">
          <h1 className="lg:mb-14 text-center mb-5 lg:text-start">
            Upload the PDF file with the information needed
          </h1>

          <div
            onClick={() => handleClick()}
            className={
              ques
                ? " mx-auto lg:mx-0 border-dashed bg-[#DFE8E1] border-2 border-red-500 h-72 w-64 md:w-72  rounded-lg flex flex-col justify-center items-center text-center"
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
            <label htmlFor="">Course</label>
            <div className="relative w-64">
              <input
                onClick={() => setcourse(false)}
                placeholder="e.g CSC211"
                onChange={(e) => usecourseCode(e.target.value)}
                value={courseCode}
                className={
                  course
                    ? " text-gray-900  border border-red-500 focus:border-red-500 w-full   appearance-none px-4 py-2 pr-8 rounded leading-tight "
                    : " text-gray-900  border  w-full   appearance-none px-4 py-2 pr-8 rounded leading-tight "
                }
                id="inline-full-name"
                type="text"
              />
            </div>
            {course ? <p className="text-red-500">Fill up this space</p> : ""}
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
                    ? " appearance-none w-full border-red-500  border px-4 py-2 pr-8 rounded  leading-tight  text-gray-900"
                    : " appearance-none w-full  border px-4 py-2 pr-8 rounded  leading-tight  text-gray-900"
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
                    ? " appearance-none w-full border-red-500  border px-4 py-2 pr-8 rounded  leading-tight  text-gray-900"
                    : " appearance-none w-full  border px-4 py-2 pr-8 rounded  leading-tight  text-gray-900"
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
                    ? " appearance-none w-full border-red-500  border px-4 py-2 pr-8 rounded  leading-tight  text-gray-900"
                    : " appearance-none w-full  border px-4 py-2 pr-8 rounded  leading-tight  text-gray-900"
                }
              >
                <option value="" disabled selected hidden className=" ">
                  Select Session
                </option>
                <option className="text-black" value="2010/2011">
                  2010/2011
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
