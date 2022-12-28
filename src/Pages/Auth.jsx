import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { useNavigate, Link } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineKey } from "react-icons/hi";
import { useFormik } from "formik";
import { basicSchema, endpoint } from "../Schema";
import loade from "../assets/load.gif";
import axios from "axios";
import Nav from "./../components/Nav";
import BeatLoader from "react-spinners/BeatLoader ";
import { ToastContainer, toast } from "react-toastify";
const Login = () => {
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
          localStorage.setItem("token", res.data.tokens);
          console.log("loged in ");
          setload(false);
          toast.success("Login successful");
          window.location.reload();
        })
        .catch((e) => {
          if (e.code.toString() == "ERR_NETWORK") {
            toast.error(e.message.toString(), { position: "bottom-center" });
            setload(false);
          }

          if (e.response.status >= 400) {
            toast.error("Invalid username or pasword");
            setload(false);
          }

          setload(false);
        });
    },
  });
  return (
    <div>
      <div className="  ">
      
        <div className="h-screen w-screen flex  items-center flex-col sm:pt-0 justify-between">
          {/*NAVIGATION BAR */}
          <Nav />
          <div className="">
            <div className="flex flex-col items-center justify-center  mx-auto  w-[20rem] h-[20rem]  md:w-[26rem] md:h-[22rem] lg:w-[22rem] lg:h-[20rem] sm:w-[24rem] xl:h-[20rem] xl:w-[25rem]   bg-white shadow-lg rounded-lg ">
              <form
                className="xl:w-[22rem] w-[17rem]  flex flex-col items-center justify-evenly h-full md:w-[20rem]"
                onSubmit={formik.handleSubmit}
              >
                <div className="relative  w-full mt-4 xl:mt-5">
                  <label htmlFor="">username</label>
                  <AiOutlineUser
                    size={20}
                    color="green"
                    className="absolute top-8 right-2 "
                  />
                  <input
                    id="username"
                    name="username"
                    placeholder="e.g CSC_100"
                    className={
                      formik.errors.username && formik.touched.username
                        ? `border-red-500 border p-2 lg:p-[0.4rem] rounded-md w-full focus:outline-red-500`
                        : `border p-2 rounded-md w-full focus:border-gray-500  lg:p-[0.4rem] `
                    }
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.username}
                    onBlur={formik.handleBlur}
                    required
                  />
                  {formik.errors.username && formik.touched.username ? (
                    <p className="text-red-500 text-sm ">
                      {formik.errors.username}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                <div className="relative w-full ">
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
                        ? `border-red-500 border   p-2 rounded-md w-full focus:outline-red-500 `
                        : `border p-2 rounded-md w-full  focus:outline-[#D1D1D1] placeholder:text-3xl  `
                    }
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    onBlur={formik.handleBlur}
                    required
                  />
                  {formik.errors.password && formik.touched.password ? (
                    <p className="text-red-500 text-sm ">
                      {formik.errors.password}
                    </p>
                  ) : (
                    ""
                  )}
                </div>

                <button
                  type="submit"
                  className=" py-1 lg:py-3 w-full bg-[#2F8B33] rounded-lg  text-white text-sm"
                >
                  {load ? <BeatLoader color="#ffffff" size={10} /> : "Log in"}
                </button>
              </form>
            </div>
          </div>

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
      </div>
    </div>
  );
};

export default Login;
