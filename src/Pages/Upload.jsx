import React from "react";
import { GrDocumentUpload } from "react-icons/gr";
const Upload = () => {
  return (
    <div className="grid lg:grid-cols-2 max-w-7xl  mx-auto">
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
      </div>
      <div className="sadfadf">
        <div class="inline-block relative w-64">
          <select class="block appearance-none w-full  px-4 py-2 pr-8 rounded shadow leading-tight ">
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              class="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;
