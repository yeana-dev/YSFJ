import React, { useState } from "react";
import products from "../../../../Products";

const Cart = ({ cartProducts}) => {
  const [cartProducts, setCartProducts] = useState([]);

  const handleAddProduct = (product) => {
    const ProductExist = cartProducts.find((product) => product.id === product.id);
    if (ProductExist) {
      setCartProducts(
        cartProducts.map((product) =>
          product.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
            : product
        )
      );
    } else {
      setCartProducts([...cartProducts, { ...ProductExist, quantity: 1 }]);
    }
  };

  const handleRemoveProduct = (product) => {
    const ProductExist = cartProducts.find((product) => product.id === product.id);
    if (ProductExist.quantity === 1) {
      setCartProducts(cartProducts.filter((product) => item.id !== product.id));
    } else {
      setCartProducts(
        cartProducts.map((product) =>
          product.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity - 1 }
            : product
        )
      );
    }
  };

  const totalPrice = cartProducts.reduce(
    (price, product) => price + product.quantity * product.price,
    0
  );

  return (
    <div>
      <div>Cart Item</div>
      {cartProducts.length === 0 && <div>No item are added</div>}
      <div>
        {cartProducts.map((product) => (
          <div key={product.id}>
            <image_url src={product.image_url} alt={product.title} />
            <div>{product.title}</div>
            <button onClick={() => handleAddProduct(product)}> + </button>
            <button onClick={() => handleRemoveProduct(product)}> - </button>
            <div>
              {product.quantity} * ${product.price}
            </div>
            <div>${totalPrice}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Cart;
