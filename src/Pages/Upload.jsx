import React from "react";
import { useState, useRef } from "react";
import { GrDocumentUpload } from "react-icons/gr";
import { Route, Routes } from "react-router-dom";
import { RiArrowDownSLine } from "react-icons/ri";
import axios from "axios";
const Upload = () => {
  const hiddenFileInput = useRef(null);
  const [disp, usedisp] = useState("");
  const [courseCode, usecourseCode] = useState("");
  const [semester, usesemester] = useState("");
  const [level, uselevel] = useState("");
  const [session, usesession] = useState("");
  const [ questionFile, usequestionFile] = useState("");

  const handleClick = () => {
    hiddenFileInput.current.click();
  };
  const handleChange = (e) => {
    const fileUploaded = e.target.files[0];
    let conver = fileUploaded.size / 1000000;
    console.log(conver);
    if (conver > 1.0) {
      usedisp("Upload file less than 1mb");
    } else {
      console.log("fileupload");
    }
  };
  const uploaded = () => {
   console.log( courseCode,
    semester,
    level,
    session,
    questionFile,);
    axios.post(
      " https://lurm-backend.onrender.com/api/v1/pastquestion/upload/",
      {
        courseCode,
        semester,
        level,
        session,
        questionFile,
      }

    );
  };

  return (
    <div className="grid lg:grid-cols-2  lg:max-w-[1020px] lg:pl-5 lg:pr-8 xl:pl-0 xl:pr-0 lg:mx-auto  pt-5   md:pt-20">
      {disp === "Upload file less than 1mb" ? (
        <div className="col-span-2 bg-black text-center text-white"> disp</div>
      ) : (
        ""
      )}
      <div className="lg:mx-0 mx-auto ">
        <h1 className="lg:mb-14 text-center mb-5 lg:text-start">
          Upload the PDF file with the information needed
        </h1>

        <div
          onClick={() => handleClick()}
          className=" mx-auto lg:mx-0 border-dashed bg-[#DFE8E1] border-2 border-[#2F8D46] h-72 w-64 md:w-72  rounded-lg flex flex-col justify-center items-center text-center"
        >
          <GrDocumentUpload size={24} />
          <input
            type="file"
            style={{ display: "none" }}
            ref={hiddenFileInput}
            onChange={handleChange}
          />
          <p>Drop files here to upload</p>
          <p>or</p>
          <p>Click to Browse</p>
        </div>
      </div>
      <div className="grid lg:gap-x-12 xl:gap-x-12  gap-y-5 mb-5 md:grid-cols-2 md:mt-20 md:mb-5 lg:gap-y-24  md:justify-items-center md:items-center  lg:grid-cols-2 mt-5 justify-center lg:justify-items-center lg:items-center  lg:mx-0">
        <div className="">
          <label htmlFor="">Course</label>
          <div className="relative w-64">
            <input
              placeholder="e.g CSC211"
              onChange={(e)=> usecourseCode(e.target.value)}
              className=" text-gray-900  border w-full   appearance-none px-4 py-2 pr-8 rounded leading-tight "
              id="inline-full-name"
              type="text"
            />
          </div>
        </div>
        <div className="holder">
          <label htmlFor="">Semester</label>
          <div className="relative w-64">
            <select
            onChange={(e)=>usesemester(e.target.value)}
              required
              className=" appearance-none w-full  border px-4 py-2 pr-8 rounded  leading-tight  text-gray-900"
            >
              <option value="" disabled selected hidden className=" ">
                Select Semester
              </option>
              <option className="text-black" value="Alpha">Alpha</option>
              <option className="text-black"  value="Omega">Omega</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#D1D1D1]">
              <RiArrowDownSLine size={26} />
            </div>
          </div>
        </div>
        <div className="holder">
          <label htmlFor="">Level</label>
          <div className="relative w-64">
            <select
            onChange={(e)=>{uselevel(e.target.value)}}
              required
              className=" appearance-none w-full  border px-4 py-2 pr-8 rounded  leading-tight  text-gray-900"
            >
              <option value="" disabled selected hidden className=" ">
                Select Level
              </option>
              <option className="text-black" value="100">100</option>
              <option className="text-black"  value="200">200</option>
              <option className="text-black"  value="300">300</option>
              <option className="text-black"  value="400">400</option>
              <option className="text-black"  value="500">500</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2  text-[#D1D1D1]">
              <RiArrowDownSLine size={26} />
            </div>
          </div>
        </div>
        <div className="holder">
          <label htmlFor="">Session</label>
          <div className="relative w-64">
            <select
            onChange={(e)=>{usesession(e.target.value)}}
              required
              className=" appearance-none w-full  border px-4 py-2 pr-8 rounded  leading-tight  text-gray-900"
            >
              <option value="" disabled selected hidden className=" ">
                Select Session
              </option>
              <option className="text-black" value="2010/2011">2010/2011</option>
              <option className="text-black" value="2011/2012">2011/2012</option>
              <option className="text-black" value="2012/2013">2012/2013</option>
              <option className="text-black" value="2013/2014">2013/2014</option>
              <option className="text-black" value="2014/2015">2014/2015</option>
              <option className="text-black" value="2015/2016">2015/2016</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#D1D1D1]">
              <RiArrowDownSLine size={26} />
            </div>
          </div>
        </div>
        <button onClick={()=>uploaded()} className=" text-white bg-[#2E8B45] rounded md:col-span-2 md:px-20 md:py-5 lg:px-20 lg:py-2 mt-5 lg:mt-0  py-4 mb-6 ">
          Upload
        </button>
      </div>
    </div>
  );
};

export default Upload;
