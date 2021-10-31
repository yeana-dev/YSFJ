import Navigation from "../Navigation/Navigation";
import "./Layout.css";

const Layout = (props) => {
  return (
    <>
      <Navigation user={props.user} userCart={props.userCart} />
      <div className="content-container">{props.children}</div>
    </>
  );
};

export default Layout;
