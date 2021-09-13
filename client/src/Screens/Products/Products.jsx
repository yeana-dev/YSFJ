import { useState, useEffect } from "react";
import "./Products.css";
import Layout from "../../Components/Layout/Layout";
import Detail from "../../Components/Detail/Detail";
import Search from "../../Components/Search/Search"
import { getProducts } from "../../Services/products";

function Products(props) {
  const [products, setProducts] = useState([]);
  const [searchResult, setSearchResult] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const allProducts = await getProducts();
      setProducts(allProducts);
      console.log(allProducts);
      setSearchResult(allProducts)
    };
    fetchProducts();
  }, []);

  const handleSearch = (event) => {
    const results = products.filter((product) =>
      product.name.toLowerCase().includes(event.target.value.toLowerCase())
    )
    setSearchResult(results)
  }

  const handleSubmit = (event) => event.preventDefault()


  return (
    <Layout user={props.user}>
      <Search onSubmit={handleSubmit} handleSearch={handleSearch} />
      <div className="products">
        {products.map((product, index) => {
          return (
            <Detail
              _id={product._id}
              title={product.title}
              image_url={product.image_url}
              price={product.price}
              color={product.color}
              key={index}
            />
          );
        })}
      </div>
    </Layout>
  );
}
export default Products;
