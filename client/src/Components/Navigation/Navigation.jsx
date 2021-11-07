import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link, NavLink } from "react-router-dom";
import React from "react";
import { getCart } from "../../Services/users";
import { useState, useEffect } from "react";
import "./Navigation.css";

const Navigation = (props) => {
  const authenticatedOptions = (
    <>
      <Link className="link" to="/add-product">
        <i className="fas fa-plus-circle" />
      </Link>
      <Link className="link" to="/sign-out">
        <button>SIGN OUT</button>
      </Link>
      <Link className="link" to={`/cart`}>
        <i className="fas fa-shopping-cart" />
        &nbsp;{props.userCart.length}
      </Link>
    </>
  );

  const unauthenticatedOptions = (
    <>
      <Link className="link" to="/sign-in">
        <i className="fas fa-user-circle" />
      </Link>
    </>
  );

  console.log(props.userCart);
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
          <i className="fas fa-bars" />
        </Navbar.Toggle>
        <Navbar.Brand href="/" id="navbar-logo">
          YSFJ
        </Navbar.Brand>
        <div id="nav-bar-text">
          {props.user && (
            <div className="user-name">{`Welcome ${props.user.username}`}</div>
          )}
          {props.user ? authenticatedOptions : unauthenticatedOptions}
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
