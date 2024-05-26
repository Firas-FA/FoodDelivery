import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBarStyle.css'
import * as bootstrap from 'bootstrap';


const NavBar = () => {
  
window.addEventListener('DOMContentLoaded', event => {

  // Navbar shrink function
  var navbarShrink = function () {
      const navbarCollapsible = document.body.querySelector('#mainNav');
      if (!navbarCollapsible) {
          return;
      }
      if (window.scrollY === 0) {
          navbarCollapsible.classList.remove('navbar-shrink')
      } else {
          navbarCollapsible.classList.add('navbar-shrink')
      }

  };

  // Shrink the navbar 
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener('scroll', navbarShrink);

  //  Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector('#mainNav');
  if (mainNav) {
      new bootstrap.ScrollSpy(document.body, {
          target: '#mainNav',
          rootMargin: '0px 0px -40%',
      });
  };

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector('.navbar-toggler');
  const responsiveNavItems = [].slice.call(
      document.querySelectorAll('#navbarResponsive .nav-link')
  );
  responsiveNavItems.map(function (responsiveNavItem) {
      responsiveNavItem.addEventListener('click', () => {
          if (window.getComputedStyle(navbarToggler).display !== 'none') {
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
      <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
        <div class="container">
          <p class="navbar-brand">HUT</p>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i class="fas fa-bars ms-1"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
              <li class="nav-item p-2"><NavLink to={"/"} > Home</NavLink></li>
              <li class="nav-item p-2"><NavLink to={"/menu"}>menu</NavLink></li>
              <li class="nav-item p-2"><NavLink to={"/basket"}>basket</NavLink></li>
              <li class="nav-item p-2"><NavLink to={"/login"}>login</NavLink></li>
            </ul>
          </div>
        </div>
      </nav>
    </>

  )
}

export default NavBar
