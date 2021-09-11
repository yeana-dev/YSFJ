import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <div className="nav-top">
        <div className="nav-logo">YSFJ</div>
      </div>
      <div className="nav-bottom">
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/products">GLASSES</NavLink>
        <NavLink to="/support">SUPPORT</NavLink>
      </div>
    </nav>
  );
};

export default Nav;
