import React, { useState } from "react";
import { IoIosClose } from "react-icons/io";
function Toaster(props) {
  return (
    <>
      <div
        className="relative ease-in duration-700 top-64 right-[2rem] sm:top-0 sm:right-0"
        onClick={props.close}
      >
        <IoIosClose
          size={36}
          className="absolute right-[0.2rem] top-[0.2rem] z-10 "
          onClick={props.close}
        />
        <div
          className={
            props.mess == "Upload Sucessful"
              ? "bg-green-200 w-64 rounded-lg py-5  shadow-lg absolute right-1 top-1 "
              : "bg-red-200 w-64 rounded-lg py-5  shadow-lg absolute right-1 top-1 "
          }
        >
          <p
            className={
              props.mess == "Upload Sucessful"
                ? "text-green-700 text-center"
                : "text-red-700 text-center"
            }
          >
            {props.mess !== "" ? props.mess : ""}
          </p>
        </div>
      </div>
    </>
  );
}

export default Toaster;
