import React from "react";
import "./FooterStyle.css";
import { GiKnifeFork } from "react-icons/gi";
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container d-flex justify-content-around">
          <div className="copyright p-2">
            <p className="m-1">
              <span style={{ color: "#F54748" }}>©</span>2024-
              <GiKnifeFork
                className="mb-1"
                style={{ color: "#FDCE77", fontSize: "16px" }}
              />
              H<span style={{ color: "#F54748" }}>U</span>T
            </p>
          </div>
          <div className="contactus p-2 d-flex">
            <FaFacebook className="m-2" />
            <IoLogoWhatsapp className="m-2" />
            <IoCallOutline className="m-2" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
