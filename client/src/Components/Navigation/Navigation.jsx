import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

const authenticatedOptions = (
  <>
    <NavLink className="link" to="/add-product">
      Add Product
    </NavLink>
    <NavLink className="link" to="/sign-out">
      Sign Out
    </NavLink>
  </>
);

const unauthenticatedOptions = (
  <>
    <NavLink className="link" to="/sign-in">
      Sign In
    </NavLink>
  </>
);

const Navigation = ({ user }) => {
  return (
    <Navbar sticky="top" expand="lg" id="navbar">
      <Navbar.Brand href="/" id="navbar-logo">
        YSFJ
      </Navbar.Brand>
      {user && <div className="link welcome">Welcome, {user.username}</div>}
      {user ? authenticatedOptions : unauthenticatedOptions}
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
