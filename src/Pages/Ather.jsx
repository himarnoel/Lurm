import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineKey } from "react-icons/hi";
import { useFormik } from "formik";
import { basicSchema, endpoint } from "../Schema";
import loade from "../assets/load.gif";
import axios from "axios";
const Ather = () => {
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
            window.location.reload();
          })
          .catch((e) => {
            console.log(e);
            setload(false);
          });
      },
    });
  return (
    <div>Ather</div>
  )
}

export default Ather