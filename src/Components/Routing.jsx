import React from "react";
import { Route, Routes } from "react-router";

import Login from "../Pages/login/Login";
import Signup from "../Pages/SignuP/Signup";

const Routing = () => {
  return (
    <div className="screens-container">
      <div className="screens-section-container">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Features" element={<Signup />} />
        </Routes>
      </div>
    </div>
  );
};

export default Routing;
