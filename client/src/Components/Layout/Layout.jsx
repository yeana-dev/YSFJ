import Navigation from "../Navigation/Navigation";

const Layout = (props) => {
  return (
    <>
      <Navigation user={props.user} />
      <div className="container">{props.children}</div>
    </>
  );
};

export default Layout;
