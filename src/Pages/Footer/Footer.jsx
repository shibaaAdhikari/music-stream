import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { CiTwitter } from "react-icons/ci";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <div
      className="d-flex justify-content-around mb-5 mt-5"
      style={{ width: "100%" }}
    >
      <div
        className="d-flex justify-content-between   mt-5 "
        style={{ width: "40%", marginLeft: "10%", cursor: "pointer" }}
      >
        <div>
          <p className="fw-bold text-light">Company</p>
          <p style={{ color: "white" }}>About</p>
          <p style={{ color: "white" }}>Jobs</p>
          <p style={{ color: "white" }}>For the record</p>
        </div>
        <div>
          <p className="fw-bold text-light">Communities</p>
          <p style={{ color: "white" }}>For Artists</p>
          <p style={{ color: "white" }}>Developers</p>
          <p style={{ color: "white" }}>Advertising</p>
          <p style={{ color: "white" }}>Investors</p>
          <p style={{ color: "white" }}>Vendors</p>
          <p style={{ color: "white" }}>Spotify for Work</p>
        </div>
        <div>
          <p className="fw-bold text-light">Useful links</p>
          <p style={{ color: "white" }}>Free Mobile App</p>
        </div>
        <div>icons</div>
        <hr></hr>
      </div>
      <div style={{ color: "wheat" }} className="mt-5 d-flex gap-3 mx-5 ">
        <div
          style={{
            height: "40px",
            width: "40px",
            fontSize: "20px",
            backgroundColor: "gray",
            cursor: "pointer",
          }}
          className="rounded-circle text-center pt-1 socialMediaIcon "
        >
          <AiOutlineInstagram style={{ color: "white" }} />
        </div>
        <div
          style={{
            height: "40px",
            width: "40px",
            fontSize: "20px",
            backgroundColor: "gray",
            cursor: "pointer",
          }}
          className="rounded-circle text-center pt-1 socialMediaIcon "
        >
          <CiTwitter style={{ fontSize: "25px", color: "white" }} />
        </div>
        <div
          style={{
            height: "40px",
            width: "40px",
            fontSize: "20px",
            backgroundColor: "gray",
            cursor: "pointer",
          }}
          className="rounded-circle text-center pt-1 socialMediaIcon"
        >
          <BsFacebook style={{ fontSize: "25px", color: "white" }} />
        </div>
      </div>
      {/* <hr></hr> */}
    </div>
  );
};

export default Footer;
