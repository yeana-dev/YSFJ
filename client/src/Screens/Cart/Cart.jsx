import { useState, useEffect } from "react";
// import "./Products.css";
import Layout from "../../Components/Layout/Layout";
import Detail from "../../Components/Detail/Detail";
import Search from "../../Components/Search/Search";
import { getCart } from "../../Services/users"
// import { deleteCartProduct } from "../../Services/users";
// import { useHistory as history } from "react-router";

function Cart(props) {
  console.log(props.user.id)
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

  const handleSearch = (event) => {
    const results = products.filter((detail) =>
      detail.title.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setSearchResult(results);
  };

  const handleSubmit = (event) => event.preventDefault();

  // const handleDelete = () => {
  //   deleteCartProduct(products.userId);
  //   history.push("/cart");
  // };

  return (
    <Layout user={props.user}>
      <div className="products-wrapper">
        <img
          className="products-image1"
          src="https://images.unsplash.com/photo-1506560268771-b749c701c371?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGJsYWNrJTIwYW5kJTIwd2hpdGUlMjBnbGFzc2VzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
          alt="side banner"
        />
        <div className="middle-wrapper">
          <Search onSubmit={handleSubmit} handleSearch={handleSearch} />
          <div className="products">
            {searchResult.map((product, index) => {
              return (
                <Detail
                  _id={product._id}
                  title={product.title}
                  image_url={product.image_url[0]}
                  price={product.price}
                  color={product.color}
                  key={index}
                />
              );
            })}
          </div>
        </div>
        <img
          className="products-image2"
          src="https://images.unsplash.com/photo-1514136649217-b627b4b9cfb2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJsYWNrJTIwYW5kJTIwd2hpdGUlMjBnbGFzc2VzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
          alt="side-banner2"
        />
      </div>
    </Layout>
  );
}
export default Cart;
