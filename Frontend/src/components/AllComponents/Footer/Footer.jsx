import React from "react";
import './FooterStyle.css'
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
          <p class="m-1"><span style={{color:"#F54748"}}>©</span>2024-<GiKnifeFork class="mb-1" style={{ color: "#FDCE77" , fontSize:"16px"}} />H<span style={{color:"#F54748"}}>U</span>T</p>
        </div>
        <div className="contactus p-2 d-flex">
        <FaFacebook class="m-2" />
        <IoLogoWhatsapp class="m-2" />
        <IoCallOutline class="m-2" />
        </div>
      </div>
    </div>
    </>
  );

};

export default Footer;
