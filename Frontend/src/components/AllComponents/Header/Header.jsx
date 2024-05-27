import React from "react";
import { Col, Container, NavLink, Row } from "react-bootstrap";
import "./HeaderStyle.css";
import img from "../../../assets/Ellipse 44.png";
import girl from "../../../assets/1.png"
// import img3 from '../../../assets/Ellipse 447.png'
import fire from '../../../assets/fire.svg'
import plant from '../../../assets/2.png'
import dish1 from '../../../assets/dish1.png'
import dish2 from '../../../assets/dish2.png'
import dish3 from '../../../assets/dish3.png'
import dish4 from '../../../assets/dish4.png'
import { SiGoogledisplayandvideo360 } from "react-icons/si";
function Header() {
  return (
    <>
      <div className="header" style={{minHeight:'90vh'}}>
          <Container >
        <Row className="mx-0 " style={{padding:"130px 0"}}>
            <Col md={6} className="pt-5">
              <div className="d-flex align-items-center h-100">
                <div>
                <h3 className="hero-text">
                  Feast Your Eyes on <span style={{color:'red'}}> Our Menu</span>. Where Every Bite Tells a Story of <span style={{color:'gold'}}>Quality</span> and <span style={{color:'gold'}}>Passion</span>
                </h3>
                  <a href="https://youtu.be/DzSSUU37ynQ" target="_blank">
                    <button className="btn btn-warning fs-5 py-2 mt-5">
                    Watch video
                    <i className="fs-4 ms-2" ><SiGoogledisplayandvideo360 /></i>
                    </button>
                  </a>
                </div>
              </div>
            </Col>
            <Col md="6" className="h-100 pt-5">
              <div className="d-flex align-items-center h-100">
              <div className="hero-img ">
                <div className="x">
                  <img src={fire} className="fire" alt="" />
                  <img src={plant} className="plant" alt="" />
                  <img src={dish1} className="dish1" alt="" />
                  <img src={dish3} className="dish3" alt="" />
                  <img src={dish2} className="dish2" alt="" />
                  <img src={dish4} className="dish4" alt="" />
                  <img src={girl} className=" girl" alt="" />
                  <img src={img} className=" img3"  alt="img cover" />
                </div>
                
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
