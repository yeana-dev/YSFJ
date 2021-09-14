import Navigation from "../Navigation/Navigation";
import "./Layout.css";

const Layout = (props) => {
  return (
    <>
      <Navigation user={props.user} />
      <div className="container">{props.children}</div>
    </>
  );
};

export default Layout;
