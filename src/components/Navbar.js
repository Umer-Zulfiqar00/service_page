import React from "react";
import './navbar.css'
import { NavLink } from "react-router-dom";
import { Container ,Image,Nav ,Navbar  } from 'react-bootstrap'
import navbarLogo from "../assets/pics/logo.jpg"

const NavigationBar=()=>{
    return(
        <>
       <Navbar   className="navbar-header">
        <Container className="navbar-container">
          <Navbar.Brand href="#home" className="navbar-logo">
          <Image src={navbarLogo} alt="Logo" width="120" height="90" />
          </Navbar.Brand>
          <Nav className="me-auto">
          <NavLink to="/"> </NavLink>
            <NavLink  to="/">Home </NavLink>
            <NavLink to="/about">About </NavLink>
            <NavLink to="/services">Services </NavLink>
            <NavLink to="/contact"> Work Sample</NavLink>
            <NavLink to="/">Testimonials </NavLink>
            <NavLink to="/">About Us </NavLink>
            <NavLink to="/">Payment </NavLink>
            <NavLink to="/">Estimating Fees </NavLink>
           </Nav>
        </Container>
      </Navbar>
        </>
    )
}

export default NavigationBar;