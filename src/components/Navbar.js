import React from "react";
import './navbar.css'
import { NavLink } from "react-router-dom";
import { Container ,Image,Nav ,Navbar  } from 'react-bootstrap'
import navbarLogo from "../assets/pics/logo.jpg"

const NavigationBar=()=>{
    return(
        <>
       <Navbar bg="light"  className="navbar-header">
        <Container className="navbar-container">
          <Navbar.Brand href="#home" className="navbar-logo">
          <Image src={navbarLogo} alt="Logo" width="120" height="90"/></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
     {/* <div className="menu_style">
          <div className="bluebook"><span className="blue">BLUE</span>BOOK </div>
            <NavLink exact activeClassName="active_class" to="/"> </NavLink>
            <NavLink exact activeClassName="active_class" to="/">Home </NavLink>
            <NavLink exact activeClassName="active_class" to="/services">Services </NavLink>
            <NavLink exact activeClassName="active_class" to="/contact"> Work Sample</NavLink>
            <NavLink exact activeClassName="active_class" to="/about">Testimonials </NavLink>
            <NavLink exact activeClassName="active_class" to="/about">About Us </NavLink>
            <NavLink exact activeClassName="active_class" to="/about">Payment </NavLink>
            <NavLink exact activeClassName="active_class" to="/about">Estimating Fees </NavLink>
            <div className="plan">Upload Your Plan Here </div>
        </div>    */}
        
        </>
    )
}

export default NavigationBar;