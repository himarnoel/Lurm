import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Home from "./Pages/Home";
import Upload from "./Pages/Upload";
import { Route } from "react-router-dom";
import { Routes, Navigate } from "react-router-dom";
import Auth from "./Pages/Auth";

function App() {
  const [count, setCount] = useState(0);
  const bol = localStorage.getItem("access");
  return (
    <div className=" ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={bol ? <Navigate to="/upload" /> : <Auth />}
        />
        <Route
          path="/upload"
          element={bol ? <Upload /> : <Navigate to="/login" />}
        />
      </Routes>
    </div>
  );
}

export default App;
