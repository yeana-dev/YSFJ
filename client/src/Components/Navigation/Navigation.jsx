import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link, NavLink } from "react-router-dom";

import "./Navigation.css";

const authenticatedOptions = (
  <>
    <Link className="link" to="/add-product">
      <i className="fas fa-plus-circle"></i>
    </Link>
    <Link className="link" to="/sign-out">
      <button>SIGN OUT</button>
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
    <Navbar sticky="top" expand="lg" id="navbar">
      <div className="navbar-top">
        <Navbar.Brand href="/" id="navbar-logo" className="text-center">
          YSFJ
        </Navbar.Brand>
        <Navbar.Text>
          {user && (
            <div className="user-name">{`Welcome ${user.username}`}</div>
          )}
          {user ? authenticatedOptions : unauthenticatedOptions}
          <Navbar.Toggle id="navbar-toggle" aria-controls="basic-navbar-nav" />
        </Navbar.Text>
      </div>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto" id="navbar-bottom">
          <NavLink to="/" exact>
            HOME
          </NavLink>
          <NavLink to="/products">GLASSES</NavLink>
          <NavLink to="/support">SUPPORT</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
