import React from "react";
import { GrDocumentUpload } from "react-icons/gr";
import { RiArrowDownSLine } from "react-icons/ri";
const Upload = () => {
  return (
    <div className="grid lg:grid-cols-2 max-w-[1240px] lg:mx-auto    pt-20">
      <div className="lg:mx-0 mx-auto ">
        <h1 className="mb-14">
          Upload the PDF file with the information needed
        </h1>

        <div
          onClick={() => alert("yes")}
          className=" mx-auto lg:mx-0 border-dashed bg-[#DFE8E1] border-2 border-[#2F8D46] h-72 w-72 rounded-lg flex flex-col justify-center items-center text-center"
        >
          <GrDocumentUpload size={24} />
          <p>Drop files here to upload</p>
          <p>or</p>
          <p>Click to Browse</p>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 mt-5 justify-center lg:justify-items-center lg:items-center  lg:mx-0">
        <div className="">
          <label htmlFor="">Course</label>
          <div className="relative w-64">
            <input
              placeholder="e.g CSC211"
              className="   border w-full   appearance-none px-4 py-2 pr-8 rounded leading-tight text-[#D1D1D1]"
              id="inline-full-name"
              type="text"
            />
          </div>
        </div>
        <div className="holder">
          <label htmlFor="">Semester</label>
          <div className="relative w-64">
            <select className=" appearance-none w-full  border px-4 py-2 pr-8 rounded  leading-tight text-[#D1D1D1]">
              <option>Select Semester</option>
              <option>Alpha</option>
              <option>Omega</option>
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
              placeholder="Select Semester"
              className=" appearance-none w-full  px-4 py-2 pr-8 rounded leading-tight text-[#D1D1D1] border"
            >
              <option>100</option>
              <option>200</option>
              <option>300</option>
              <option>400</option>
              <option>500</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#D1D1D1]">
              <RiArrowDownSLine size={26} />
            </div>
          </div>
        </div>
        <div className="holder">
          <label htmlFor="">Session</label>
          <div className="relative w-64">
            <select
              placeholder="Select Semester"
              className=" appearance-none w-full  px-4 py-2 pr-8 rounded border  leading-tight text-[#D1D1D1]"
            >
              <option>Select Session</option>
              <option>2010/2011</option>
              <option>2011/2012</option>
              <option>2012/2013</option>
              <option>2013/2014</option>
              <option>2014/2015</option>
              <option>2015/2016</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#D1D1D1]">
              <RiArrowDownSLine size={26} />
            </div>
          </div>
        </div>
        <button className=" text-white bg-[#2E8B45] rounded lg:col-span-2 lg:px-20 lg:py-6 mt-5 lg:mt-0  ">
          Upload
        </button>
      </div>
    </div>
  );
};

export default Upload;
