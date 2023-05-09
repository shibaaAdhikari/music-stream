import React from "react";
import Navbars from "./Navbar.js/Navbars";
import Homepage from "./Homepage/Homepage";

const LandingPage = () => {
  return (
    <div className="d-flex">
      <Navbars />
      <Homepage />
    </div>
  );
};

export default LandingPage;
