import { useState, useEffect } from "react";
import "./Cart.css";
import Layout from "../../Components/Layout/Layout";
import { getCart } from "../../Services/users";
import { deleteCartItem } from "../../Services/users";

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


  let totalPrice = 0;

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
