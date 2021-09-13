import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <Navbar sticky="top" expand="lg" id="navbar">
      <Navbar.Brand href="/" id="navbar-logo">
        YSFJ
      </Navbar.Brand>
      <NavLink to="/sign-in">sign-in</NavLink>
      <NavLink to="/add-product">Add Product</NavLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto" id="navbar-bottom">
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/products">GLASSES</NavLink>
          <NavLink to="/support">SUPPORT</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
