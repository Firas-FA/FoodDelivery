import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./HeaderStyle.css";
import img from "../../../assets/Ellipse 44.png";
import girl from "../../../assets/1.png"
import img3 from '../../../assets/Ellipse 447.png'
function Header() {
  return (
    <>
      <div className="header" style={{minHeight:'98vh'}}>
          <Container >
        <Row className="mx-0 " style={{padding:"130px 0"}}>
            <Col md={6} className="pt-5">
              <div className="d-flex align-items-center h-100">
                <div>
                <h3 className="text-light">
                  Feast Your Eyes on Our Menu. Where Every Bite Tells a Story of
                  Quality and Passion
                </h3>
                <button class="button">
                  <div class="button-overlay"></div>
                  <span>
                    Watch video{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 53 58"
                      height="58"
                      width="53"
                    >
                      <path
                        stroke-width="9"
                        stroke="currentColor"
                        d="M44.25 36.3612L17.25 51.9497C11.5833 55.2213 4.5 51.1318 4.50001 44.5885L4.50001 13.4115C4.50001 6.86824 11.5833 2.77868 17.25 6.05033L44.25 21.6388C49.9167 24.9104 49.9167 33.0896 44.25 36.3612Z"
                      ></path>
                    </svg>
                  </span>
                </button>
                </div>
              </div>
            </Col>
            <Col md="6" className="h-100 pt-5">
              <div className="d-flex align-items-center h-100">
              <div className="hero-img ">
                <img src={img3} className=" img1" alt="" />
                <img src={girl} className=" img2" alt="" />
              
                <img src={img} className="w-100 img2 img3"  alt="img cover" />
              </div>
              </div>
            </Col>
        </Row>
          </Container>
      </div>
    </>
  );
}

export default Header;
