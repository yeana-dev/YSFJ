import Navigation from "../Navigation/Navigation";

const Layout = (props) => {
  return (
    <>
      <Navigation />
      {props.children}
    </>
  );
};

export default Layout;
