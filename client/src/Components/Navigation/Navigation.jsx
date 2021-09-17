import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link, NavLink } from "react-router-dom";
import React from "react";
import "./Navigation.css";

const authenticatedOptions = (
  <>

    <Link className="link" to="/add-product">
      <i className="fas fa-plus-circle"></i>
    </Link>
    <Link className="link" to="/sign-out">
      <button>SIGN OUT</button>
    </Link>
    <Link className="link" to={`/cart`}>
      <i class="fas fa-shopping-cart"></i>
    </Link>
  </>
);

const unauthenticatedOptions = (
  <>
    <Link className="link" to="/sign-in">
      <i className="fas fa-user-circle"></i>
    </Link>
  </>
);


const Navigation = ({ user }) => {
  return (
    <Navbar
      variant="dark"
      collapseOnSelect
      sticky="top"
      expand="lg"
      id="navbar"
    >
      <div className="navbar-top">
        <Navbar.Toggle
          id="navbar-toggle-button"
          aria-controls="basic-navbar-nav"
        >
          <i className="fas fa-bars"></i>
        </Navbar.Toggle>
        <Navbar.Brand href="/" id="navbar-logo">
          YSFJ
        </Navbar.Brand>
        <div id="nav-bar-text">
          {user && (
            <div className="user-name">{`Welcome ${user.username}`}</div>
          )}
          {user ? authenticatedOptions : unauthenticatedOptions}
        </div>
      </div>
      <Navbar.Collapse>
        <Nav id="navbar-bottom">
          <Nav.Item>
            <NavLink to="/" exact>
              HOME
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/products">EYEWEAR</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/support">SUPPORT</NavLink>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
