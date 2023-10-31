import { useState } from "react";
import "./App.css";
import Home from "./Pages/Home";
import Upload from "./Pages/Upload";
import { Route } from "react-router-dom";
import { Routes, Navigate } from "react-router-dom";

import "react-toastify/dist/ReactToastify.min.css";

import Login from "./Pages/Auth";
import { ToastContainer } from "react-toastify";

function App() {
  const [count, setCount] = useState(0);
  const token = localStorage.getItem("token");
  return (
    <div className=" ">
      <ToastContainer position="top-right" autoClose={2500} />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/login"
          element={token ? <Navigate to="/upload" /> : <Login />}
        />
        <Route
          path="/upload"
          element={token ? <Upload /> : <Navigate to="/login" />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
