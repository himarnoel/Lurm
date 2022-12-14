import React, { useState } from "react";
import { IoIosClose } from "react-icons/io";
function Toaster(props) {
  return (
    <>
      <div className="relative" onClick={props.close}>
        <IoIosClose
          size={36}
          className="absolute right-[1rem] z-10"
          onClick={props.close}
        />
        <div
          className={
            props.mess == "Upload sucessful"
              ? "bg-green-200 w-64 rounded-lg py-5  shadow-lg absolute right-1 top-1 "
              : "bg-red-200 w-64 rounded-lg py-5  shadow-lg absolute right-1 top-1 "
          }
        >
          <p
            className={
              props.mess == "Upload sucessful"
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
