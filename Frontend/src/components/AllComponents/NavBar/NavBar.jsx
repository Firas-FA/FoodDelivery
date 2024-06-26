import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBarStyle.css";
import * as bootstrap from "bootstrap";
import { GiKnifeFork } from "react-icons/gi";

const NavBar = () => {
  window.addEventListener("DOMContentLoaded", (event) => {
    var navbarShrink = function () {
      const navbarCollapsible = document.body.querySelector("#mainNav");
      if (!navbarCollapsible) {
        return;
      }
      if (window.scrollY === 0) {
        navbarCollapsible.classList.remove("navbar-shrink");
      } else {
        navbarCollapsible.classList.add("navbar-shrink");
      }
    };

    // Shrink the navbar
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener("scroll", navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector("#mainNav");
    if (mainNav) {
      new bootstrap.ScrollSpy(document.body, {
        target: "#mainNav",
        rootMargin: "0px 0px -40%",
      });
    }

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector(".navbar-toggler");
    const responsiveNavItems = [].slice.call(
      document.querySelectorAll("#navbarResponsive .nav-link")
    );
    responsiveNavItems.map((responsiveNavItem) => {
      return responsiveNavItem.addEventListener("click", () => {
        if (window.getComputedStyle(navbarToggler).display !== "none") {
          navbarToggler.click();
        }
      });
    });
  });

  return (
    // <div className='d-flex bg-dark navbar justify-content-center gap-4'>
    //     <NavLink to={"/"} > Home</NavLink>
    //     <NavLink to={"/menu"}>menu</NavLink>
    //     <NavLink to={"/basket"}>basket</NavLink>
    //     <NavLink to={"/login"}>login</NavLink>
    // </div>
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top"
        id="mainNav"
      >
        <div className="container">
          <div className="d-flex">
            <GiKnifeFork
              className="mt-1"
              style={{ color: "#FDCE77", fontSize: "28px" }}
            />
            <p className="navbar-brand">
              H<span style={{ color: "#F54748" }}>U</span>T
            </p>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i className="fas fa-bars ms-1"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
              <li className="nav-item p-2">
                <NavLink to={"/"}> Home</NavLink>
              </li>
              <li className="nav-item p-2">
                <NavLink to={"/menu"}>menu</NavLink>
              </li>
              <li className="nav-item p-2">
                <NavLink to={"/basket"}>basket</NavLink>
              </li>
              <li className="nav-item p-2">
                <NavLink to={"/login"}>login</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
