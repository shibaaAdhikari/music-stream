import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { CiTwitter } from "react-icons/ci";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="d-flex justify-content-between  ">
      <div className="d-flex mx-5 mt-5 gap-5">
        <div>
          <p className="fw-bold text-light">Company</p>
          <a
            href="https://www.spotify.com/np-en/about-us/contact/"
            style={{ color: "rgb(167,165,128)" }}
          >
            About
          </a>
          <p style={{ color: "rgb(167,165,128)" }}>Jobs</p>
          <p style={{ color: "rgb(167,165,128)" }}>For the record</p>
          <p></p>
        </div>
        <div>
          <p className="fw-bold text-light">Communities</p>
          <a
            href="https://www.spotify.com/np-en/about-us/contact/"
            style={{ color: "rgb(167,165,128)" }}
          >
            For Artists
          </a>
          <p style={{ color: "rgb(167,165,128)" }}>Developers</p>
          <p style={{ color: "rgb(167,165,128)" }}>Advertising</p>
          <p alt="vendor" style={{ color: "rgb(167,165,128)" }}>
            Investors
          </p>
        </div>
        <div>
          <p className="fw-bold text-light">Useful links</p>
          <p style={{ color: "rgb(167,165,128)" }}>Supports</p>
          <p style={{ color: "rgb(167,165,128)" }}>Supports</p>
          <p style={{ color: "rgb(167,165,128)" }}>Supports</p>
        </div>
        <div>icons</div>
        <hr></hr>
      </div>
      <div style={{ color: "wheat" }} className="mt-5 d-flex gap-3 mx-5 ">
        <div>
          <AiOutlineInstagram />
        </div>
        <div>
          <CiTwitter />
        </div>
        <div>
          <BsFacebook />
        </div>
      </div>
    </div>
  );
};

export default Footer;
