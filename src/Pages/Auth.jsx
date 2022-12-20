import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineKey } from "react-icons/hi";
import { useFormik } from "formik";
import { basicSchema, endpoint } from "../Schema";
import loade from "../assets/load.gif";
import axios from "axios";
const Auth = () => {
  const navigate = useNavigate();

  const [load, setload] = useState(false);
  const login = () => {};
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: basicSchema,
    onSubmit: (values) => {
      setload(true);
      axios
        .post(`${endpoint}login/`, values)
        .then((res) => {
          localStorage.setItem("access", res.data.access);
          console.log("loged in ");
          setload(false);
          navigate("/upload");
          window.location.reload();
        })
        .catch((e) => {
          console.log(e);
          setload(false);
        });
    },
  });
  // console.log(formik.errors);

  return (
    <div className="flex flex-col items-center  h-screen w-screen ">
      <div className="flex mt-14 sm:mt-10 md:mt-12">
        <img src={logo} alt="" className="object-contain w-14 mr-5" />
        <div>
          <p className="text-lg lg:text-xl font-bold text-black">
            Landmark University
          </p>
          <p className="text-lg lg:text-xl font-bold text-black">
            Resource Manager
          </p>
        </div>
      </div>
      <div className="  sm:mt-10   md:mt-12  mt-14 w-[20rem] h-[20rem]  md:w-[23rem] md:h-[20rem] lg:w-[22rem] lg:h-[20rem] sm:w-[24rem] xl:h-[20rem] xl:w-[25rem]   bg-white shadow-lg rounded-lg flex flex-col items-center ">
        <form className="xl:w-[22rem] w-[17rem]" onSubmit={formik.handleSubmit}>
          <div className="relative  w-full mt-10 xl:mt-10">
            <label htmlFor="">username</label>
            <AiOutlineUser
              size={20}
              color="green"
              className="absolute top-8 right-2 "
            />
            <input
              id="username"
              name="username"
              placeholder="aremu.charity"
              className={
                formik.errors.username && formik.touched.username
                  ? `border-red-500 border p-2 rounded-md w-full focus:outline-red-500`
                  : `border p-2 rounded-md w-full focus:outline-[#D1D1D1] `
              }
              type="text"
              onChange={formik.handleChange}
              value={formik.values.username}
              onBlur={formik.handleBlur}
              required
            />
            {formik.errors.username && formik.touched.username ? (
              <p className="text-red-500 text-sm ">{formik.errors.username}</p>
            ) : (
              ""
            )}
          </div>
          <div className="relative w-full mt-5">
            <label htmlFor="">Password</label>
            <HiOutlineKey
              size={20}
              color="green"
              className="absolute top-8 right-2"
            />
            <input
              name="password"
              id="password"
              placeholder="......"
              className={
                formik.errors.password && formik.touched.password
                  ? `border-red-500 border  p-2 rounded-md w-full focus:outline-red-500 `
                  : `border p-2 rounded-md w-full focus:outline-[#D1D1D1] `
              }
              type="text"
              onChange={formik.handleChange}
              value={formik.values.password}
              onBlur={formik.handleBlur}
              required
            />
            {formik.errors.password && formik.touched.password ? (
              <p className="text-red-500 text-sm ">{formik.errors.password}</p>
            ) : (
              ""
            )}
          </div>
          <button
            type="submit"
            className=" py-1 xl:py-2 w-full bg-[#2F8B33] rounded-lg mt-10 xl:mt-12 text-white text-sm"
          >
            {load ? (
              <img src={loade} alt="" className="object-contain w-6 mx-auto" />
            ) : (
              "Log in"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
