import { useState, useEffect } from "react";
import "./Cart.css";
import { getProducts } from "../../Services/products";
import { getCart, deleteCartItem } from "../../Services/users";

function Cart(props) {
  // Because we need to change the array of cartItems instantly when the user deletes an item from the cart,
  // We will need to useState for the cart items in this screen
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      // Once the page renders, we will need to grab current user's cart items using GET method by current user's id
      const items = await getCart(props.user.id);
      setCartItems(items);
    };
    fetchCart();
  }, [props.user.id]);
  // Make a variable for total price, so we can add them up by each cart item to display it
  let totalPrice = 0;

  const handleDelete = (productId, product) => {
    // Call DELETE API call using current user id and deleted cart item id
    deleteCartItem(props.user.id, productId);
    // Remove the deleted item from the cart array
    cartItems.splice(cartItems.indexOf(product), 1);
    // This will re-arrange the cart items that renders to the screen
    setCartItems([...cartItems]);
    // This will change the quantity of the cart items that is being displayed in the navbar
    props.setUserCart([...cartItems]);
  };
  if (!cartItems) {
    return <header>Loading...</header>;
  } else {
    return (
      <div className="cart-container">
        {cartItems.map((product, index) => {
          // Add the current cart item's price to the total price variable we created earlier
          totalPrice += product.price;
          return (
            <div className="cart-item" key={index}>
              <div className="cart-item-left">
                <div className="cart-item-title">{product.title}</div>
                <div className="cart-item-price">$ {product.price}</div>
                <hr />
                <div className="cart-item-description">
                  {product.description}
                </div>
              </div>
              <img src={product.image_url[0]} alt="cart-item-preview" />
              <button onClick={() => handleDelete(product._id, product)}>
                <i className="fas fa-trash-alt"></i>
              </button>
            </div>
          );
        })}
        <div className="cart-item">
          <div className="cart-total-price">Total : $ {totalPrice}</div>
        </div>
      </div>
    );
  }
}
export default Cart;
