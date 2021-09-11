import { useState, useEffect } from "react";
import Detail from "../Detail/Detail";
import { getProducts } from "../../Services/products";

const ProductCards = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const allProducts = await getProducts();
      setProducts(allProducts);
    };
    fetchProducts();
  }, []);

  console.log(products);
  const CARDS = products
    .reverse()
    .map((product, index) =>
      index < 8 ? (
        <Detail
          _id={product._id}
          title={product.title}
          imgURL={product.image_url}
          color={product.color}
          price={product.price}
          key={index}
        />
      ) : null
    );

  return (
    <div className="products">
      <div className="cards">{CARDS}</div>
    </div>
  );
};

export default ProductCards;
