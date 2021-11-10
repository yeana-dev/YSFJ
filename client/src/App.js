import { useState, useEffect } from "react";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import Home from "./Screens/Home/Home";
import Products from "./Screens/Products/Products";
import ProductCreate from "./Screens/ProductCreate/ProductCreate";
import ProductEdit from "./Screens/ProductEdit/ProductEdit";
import Detail from "./Screens/Detail/Detail";
import Delete from "./Screens/Delete/Delete";
import Newsletter from "./Screens/Newsletter/Newsletter";
import SignUp from "./Screens/SignUp/SignUp";
import SignIn from "./Screens/SignIn/SignIn";
import SignOut from "./Screens/SignOut/SignOut";
import Support from "./Screens/Support/Support";
import { Route, Switch, Redirect } from "react-router-dom";
import { getCart, verifyUser } from "./Services/users";
import Cart from "./Screens/Cart/Cart";
const App = () => {
  const [user, setUser] = useState(null);
  const [userCart, setUserCart] = useState([]);
  useEffect(() => {
    const fetchUser = async () => {
      // Check the token in the browser to see if the token is valid
      const resp = await verifyUser();
      if (resp) {
        // If the token is valid, Grab user's cart to allow navbar is display user's cart
        const cart = await getCart(resp.id);
        setUserCart(cart);
        // Also set current user with the payload
        setUser(resp);
      } else {
        // If the token is not valid, keep the current user null
        setUser(null);
      }
    };
    fetchUser();
  }, []);
  return (
    <div className="app">
      <Layout user={user} userCart={userCart}>
        <Switch>
          <Route exact path="/">
            <Home user={user} />
          </Route>
          <Route path="/sign-up">
            <SignUp setUser={setUser} />
          </Route>
          <Route path="/sign-in">
            <SignIn setUser={setUser} />
          </Route>
          <Route path="/sign-out">
            <SignOut setUser={setUser} setUserCart={setUserCart} />
          </Route>
          <Route exact path="/products">
            <Products user={user} />
          </Route>
          <Route path="/add-product">
            {user ? <ProductCreate user={user} /> : <Redirect to="/sign-up" />}
          </Route>
          <Route exact path="/products/:id/edit">
            {user ? <ProductEdit user={user} /> : <Redirect to="/" />}
          </Route>
          <Route exact path="/products/:id">
            <Detail user={user} userCart={userCart} setUserCart={setUserCart} />
          </Route>
          <Route exact path="/support">
            <Support user={user} />
          </Route>
          <Route exact path={"/cart"}>
            <Cart user={user} userCart={userCart} setUserCart={setUserCart} />
          </Route>
          <Route exact path="/delete">
            <Delete user={user} />
          </Route>
          <Route exact path="/newsletter">
            <Newsletter user={user} />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
};

export default App;
