import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { CiTwitter } from "react-icons/ci";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <>
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
            <p style={{ color: "white" }}>About Us</p>
            <p style={{ color: "white" }}>Careers</p>
            <p style={{ color: "white" }}>Press</p>
            <p style={{ color: "white" }}>Contact</p>
          </div>
          <div>
            <p className="fw-bold text-light">Features</p>
            <p style={{ color: "white" }}>Discover</p>
            <p style={{ color: "white" }}>Playlists</p>
            <p style={{ color: "white" }}>Charts</p>
            <p style={{ color: "white" }}>Genres</p>
            <p style={{ color: "white" }}>Podcasts</p>
          </div>
          <div>
            <p className="fw-bold text-light">Legal</p>
            <p style={{ color: "white" }}>Terms of Service</p>
            <p style={{ color: "white" }}>Privacy Policy</p>
            <p style={{ color: "white" }}>Cookie Policy</p>
          </div>
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
      </div>
      <div className="footer-credits text-center">
        <p style={{ color: "white" }}>
          &copy; 2023 Music Streaming. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
