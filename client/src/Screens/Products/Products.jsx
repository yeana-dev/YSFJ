import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import "./Products.css";
import Layout from "../../Components/Layout/Layout";
import Detail from "../../Components/Detail/Detail";
import Search from "../../Components/Search/Search";
import { getProducts } from "../../Services/products";
import { Link } from "react-router-dom";

function Products(props) {
  const [products, setProducts] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [header, setHeader] = useState("EYEWEAR");

  useEffect(() => {
    const fetchProducts = async () => {
      const allProducts = await getProducts();
      setProducts(allProducts);
      setSearchResult(allProducts);
    };
    fetchProducts();
  }, []);

  const handleSearch = (event) => {
    const results = products.filter((detail) =>
      detail.title.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setSearchResult(results);
  };

  const showEyeglasses = () => {
    const results = products.filter(
      (glasses) => glasses.category === "glasses"
    );
    setHeader("EYEGLASSES");
    setSearchResult(results);
  };

  const showSunglasses = () => {
    const results = products.filter(
      (glasses) => glasses.category === "sunglasses"
    );
    setHeader("SUNGLASSES");
    setSearchResult(results);
  };

  const showAll = () => {
    setSearchResult(products);
  };

  const handleSubmit = (event) => event.preventDefault();
  const firstHalfArr = searchResult.slice(0, 6);
  const secondHalfArr = searchResult.slice(6);

  return (
    <div className="glasses-product-list">
      <Search onSubmit={handleSubmit} handleSearch={handleSearch} />
      <div className="eyewear-button-container">
        <div className="eyewear-button" onClick={showEyeglasses}>
          <img
            src="https://cdn4.iconfinder.com/data/icons/stylish-people/32/People_female_glasses_nerd_gerk_student-48.png"
            alt="character wearing glasses"
          />
          SHOP EYEGLASSES
        </div>
        <div className="eyewear-button" onClick={showSunglasses}>
          <img
            src="https://cdn4.iconfinder.com/data/icons/stylish-people/32/People_male_young_party_sunglasses-48.png"
            alt="character with sunglasses"
          />
          SHOP SUNGLASSES
        </div>
        <div className="eyewear-button all-button" onClick={showAll}>
          SHOP ALL
        </div>
      </div>
      <header>{header}</header>
      <div className="products">
        {firstHalfArr.map((product, index) => {
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
        <Card id="sale-banner">
          <Card.Img
            id="horiz-image"
            src="https://images.unsplash.com/photo-1512793988391-0716d78a18ac?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fGJsYWNrJTIwYW5kJTIwd2hpdGUlMjBnbGFzc2VzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            alt="card"
          />
          <Card.ImgOverlay>
            <Card.Text id="sale-text">
              <h2 className="sale-message" id="h2-sale">
                FOR LIMITED TIME YOU CAN GET SELECTED GLASSES FOR 25% OFF
              </h2>
              <p className="sale-message2" id="p-sale">
                OFFER ONLY VALID THRU 9-9 TO 10-11
              </p>
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
        {secondHalfArr.map((product, index) => {
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
      <div className="bottom-image-links">
        <Link className="support-link1" to="/support">
          <img
            className="support-img-1"
            src="https://images.unsplash.com/photo-1600630242764-41cf7d951ac4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODV8fGdsYXNzZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            alt="card"
          />
          <p className="message-1">
            Contact an professional to get any questions on frames
          </p>
        </Link>
        <Link className="support-link2" to="/newsletter">
          <img
            className="support-img-2"
            src="https://images.unsplash.com/photo-1553544923-37efbe6ff816?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzh8fGdsYXNzZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            alt="card"
          />
          <p className="message-2">Subscribe to our news letter</p>
        </Link>
      </div>
    </div>
  );
}
export default Products;
