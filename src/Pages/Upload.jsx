import React from "react";
import { GrDocumentUpload } from "react-icons/gr";
const Upload = () => {
  return (
    <div className="grid max-w-7xl  mx-auto">
      <div className=" ">
        <h1 className="mb-14">
          Upload the PDF file with the information needed
        </h1>

        <div
          onClick={() => alert("yes")}
          className="border-dashed border-2 border-[#2F8D46] h-72 w-72 rounded-lg flex flex-col justify-center items-center text-center"
        >
          <GrDocumentUpload size={24} />
          <p>Drop files here to upload</p>
          <p>or</p>
          <p>Click to Browse</p>
        </div>
        <div className="sadfadf">
          <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
            <option>
              Really long option that will likely overlap the chevron
            </option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Upload;
