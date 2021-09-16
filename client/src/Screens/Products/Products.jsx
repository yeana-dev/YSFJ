import { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import "./Products.css";
import Layout from "../../Components/Layout/Layout";
import Detail from "../../Components/Detail/Detail";
import Search from "../../Components/Search/Search";
import { getProducts } from "../../Services/products";

function Products(props) {
  const [products, setProducts] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

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
    console.log(searchResult.length)
  };

  const handleSubmit = (event) => event.preventDefault();

  const firstHalfArr = searchResult.slice(0, 3);
  const secondHalfArr = searchResult.slice(3);


  return (
    <Layout user={props.user}>
      <div className="products-wrapper">
        <img
          className="products-image"
          src="https://images.unsplash.com/photo-1506560268771-b749c701c371?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGJsYWNrJTIwYW5kJTIwd2hpdGUlMjBnbGFzc2VzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
          alt="side banner"
        />
        <div className="middle-wrapper">
          <Search onSubmit={handleSubmit} handleSearch={handleSearch} />
          <div className="products">


            {
              firstHalfArr.map((product, index) => {
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


            <Card id="sale-banner" >
              <Card.Img id='horiz-image' src="https://images.unsplash.com/photo-1512793988391-0716d78a18ac?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fGJsYWNrJTIwYW5kJTIwd2hpdGUlMjBnbGFzc2VzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="card-image" />
              <Card.ImgOverlay>
                <Card.Text id='sale-text'>
                  <h2 className='sale-message' id='h2-sale'>FOR LIMITED TIME YOU CAN GET SELECTED GLASSES FOR 25% OFF</h2>
                  <p className='sale-message2' id='p-sale' >OFFER ONLY VALID THRU 9-9 TO 10-11</p>
                </Card.Text>
              </Card.ImgOverlay>
            </Card>

            {
              secondHalfArr.map((product, index) => {
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
          className="products-image"
          src="https://images.unsplash.com/photo-1514136649217-b627b4b9cfb2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJsYWNrJTIwYW5kJTIwd2hpdGUlMjBnbGFzc2VzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
          alt="side-banner2"
        />
      </div>

    </Layout>
  );
}
export default Products;
