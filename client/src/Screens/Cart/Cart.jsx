import { useState, useEffect } from "react";
import "./Cart.css";
import Layout from "../../Components/Layout/Layout";
import { getProducts } from "../../Services/products";
import { getCart, deleteCartItem } from "../../Services/users";

function Cart(props) {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      const items = await getCart(props.user.id);
      const allProducts = await getProducts();
      let cartArray = [];
      items.forEach((item) => {
        cartArray.push(allProducts.find((product) => item === product._id));
      });
      setCartItems(cartArray);
    };
    fetchCart();
  }, [props.user.id]);

  let totalPrice = 0;
  console.log(cartItems);

  return (
    <Layout user={props.user}>
      <div className="cart-container">
        {cartItems.map((product) => {
          console.log(product);
          totalPrice += product.price;
          return (
            <div className="cart-item">
              <div className="cart-item-left">
                <div className="cart-item-title">{product.title}</div>
                <div className="cart-item-price">$ {product.price}</div>
                <hr />
                <div className="cart-item-description">
                  {product.description}
                </div>
              </div>
              <img src={product.image_url[0]} alt="cart-item-preview" />
              <button onClick={() => {}}>
                <i class="fas fa-trash-alt"></i>
              </button>
            </div>
          );
        })}
        <div className="cart-item">
          <div className="cart-total-price">Total : $ {totalPrice}</div>
        </div>
      </div>
    </Layout>
  );
}
export default Cart;
