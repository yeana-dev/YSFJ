import Navigation from "../Navigation/Navigation";

const Layout = (props) => {
  return (
    <>
      <Navigation user={props.user} />
      {props.children}
    </>
  );
};

export default Layout;
