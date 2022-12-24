import React, { useState } from "react";
import { Link } from "react-router-dom";
const Footen = () => {
  return (
    <div>
      <div className=" py-5 pl-5 lg:px-10 md:text-sm w-screen text-[0.6rem]  bg-white flex justify-between items-center">
        <div className="w-36">©Copyright Holders </div>
        <div className=" md:w-[27rem]  w-64 flex justify-evenly ">
          <Link to="/login">Upload Documents</Link>
          <a href="https://cms.lmu.edu.ng" target="_blank">
            CMS
          </a>
          <a href="https://lmu.edu.ng" target="_blank">
            School Website
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footen;
