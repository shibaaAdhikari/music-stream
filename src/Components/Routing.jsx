import React from "react";
import { Route, Routes } from "react-router";
import SidenavBar from "./SidenavBar";
import Home from "../Pages/Homepage/Home";
import Features from "../Pages/Features/Features";

const Routing = () => {
  return (
    <div className="screens-container">
      <SidenavBar>
        <div className="screens-section-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Features" element={<Features />} />
          </Routes>
        </div>
      </SidenavBar>
    </div>
  );
};

export default Routing;
