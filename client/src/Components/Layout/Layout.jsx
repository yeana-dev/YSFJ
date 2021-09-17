import Navigation from "../Navigation/Navigation";
import "./Layout.css";

const Layout = (props) => {
  return (
    <>
      <Navigation user={props.user} />
      <div className="content-container">{props.children}</div>
    </>
  );
};

export default Layout;
