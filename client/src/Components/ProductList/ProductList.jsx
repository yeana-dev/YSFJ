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

  const CARDS = products
    .reverse()
    .map((product, index) =>
      index < 6 ? (
        <Detail
          _id={product._id}
          title={product.title}
          image_url={product.image_url[0]}
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
