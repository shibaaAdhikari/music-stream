import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Mainpage from "./Pages/Mainpage/Mainpage";
import Login from "../src/Pages/login/Login";
import Signup from "./Pages/SignuP/Signup";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/Signup" element={<Signup />} />
          {/* <Route path="/Login" elemment={<Login />} /> */}
          <Route path="/Login" element={<Login />} />
        </Routes>
        {/* <Login /> */}
      </div>
    </>
  );
}

export default App;
