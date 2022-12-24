import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div> <div className="lg:w-screen py-2 px-5 md:px-10 bg-white shadow-sm md:shadow-md lg:shadow-lg   w-screen">
 <Link to="/">   <div className="flex font-bold  items-center ">
      <img src={logo} alt="" className="object-contain w-10 lg:" />{" "}
      <span className="flex flex-col leading-[1.2rem] pl-2">
        <span>Landmark University</span>
        <span>Resources Manager</span>
      </span>
    </div>
    </Link>
  </div></div>
  )
}

export default Nav