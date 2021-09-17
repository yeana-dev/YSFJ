import { useState, useEffect } from "react";
import "./Cart.css";
import Layout from "../../Components/Layout/Layout";
import Detail from "../../Components/Detail/Detail";
import Search from "../../Components/Search/Search";
import { getCart } from "../../Services/users";
import { deleteCartItem } from "../../Services/users";
import { Redirect } from "react-router";

function Cart(props) {
  const [products, setProducts] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const allProducts = await getCart(props.user.id);
      setProducts(allProducts);
      console.log(allProducts);
      setSearchResult(allProducts);
    };
    fetchProducts();
  }, [props.user.id]);

  const handleSubmit = (event) => event.preventDefault();

  let totalPrice = 0;

  // const handleDelete = () => {
  //   deleteCartProduct(products.userId);
  //   history.push("/cart");
  // };

  return (
    <Layout user={props.user}>
      <div className="cart-container">
        {searchResult.map((product) => {
          totalPrice += product.price;
          return (
            <div className="cart-item">
              <div className="cart-item-left">
                <div className="cart-item-title">{product.title}</div>
                <div className="cart-item-price">${product.price}</div>
                <hr />
                <div className="cart-item-description">
                  {product.description}
                </div>
              </div>
              <img src={product.image_url[0]} alt="cart-item-preview" />
              <button
                onClick={() => {
                  deleteCartItem(product.userId, product._id);
                  Redirect.push("/cart");
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
        <div className="cart-item">
          <div className="cart-total-price">Total : ${totalPrice}</div>
        </div>
      </div>
    </Layout>
  );
}
export default Cart;
