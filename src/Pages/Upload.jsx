import React from "react";
import { GrDocumentUpload } from "react-icons/gr";
import {RiArrowDownSLine} from "react-icons/ri"
const Upload = () => {
  return (
    <div className="grid lg:grid-cols-2 max-w-[1240px] bg-slate-400  mx-auto">
      <div className=" ">
        <h1 className="mb-14">
          Upload the PDF file with the information needed
        </h1>

        <div
          onClick={() => alert("yes")}
          className="border-dashed bg-[#DFE8E1] border-2 border-[#2F8D46] h-72 w-72 rounded-lg flex flex-col justify-center items-center text-center"
        >
          <GrDocumentUpload size={24} />
          <p>Drop files here to upload</p>
          <p>or</p>
          <p>Click to Browse</p>
        </div>
      </div>
      <div className="sadfadf">
        <label htmlFor="">Semester</label>
        <div className="relative w-64">
          <select
            placeholder="Select Semester"
            className="block appearance-none w-full  px-4 py-2 pr-8 rounded shadow leading-tight "
          >
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#D1D1D1]">
            <RiArrowDownSLine size={26}/>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;
