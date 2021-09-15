import Products from "../Products/Products";
import React, { useState } from "react";



const Cart = () => {
  
  const [cartProducts, setCartProducts] = useState([]);

  const handleRemoveProduct = (products) => {
    const ProductExist = cartProducts.find((products) => products === products.id);
    if (ProductExist.quantity === 1) {
      setCartProducts(cartProducts.filter((products) =>products !== products.id));
    } else {
      setCartProducts(
        cartProducts.map((products) =>
          products === products.id
            ? { ...ProductExist, quantity: ProductExist.quantity - 1 }
            : products
        )
      );
    }
  };

  const handleAddProduct = () => {
    const ProductExist = cartProducts.find((products) => products === products.id);
    if (ProductExist) {
      setCartProducts(
        cartProducts.map((products) =>
        products !== products.id
            ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
            : products
        )
      );
    } else {
      setCartProducts([...cartProducts, { ...ProductExist, quantity: 1 }]);
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
