import { useState } from "react";
import "./ProductCreate.css";
import { Redirect } from "react-router-dom";
import { createProduct } from "../../Services/products";
import Layout from "../../Components/Layout/Layout";

const ProductCreate = (props) => {
  const [product, setProduct] = useState({
    title: "",
    image_url: "",
    description: "",
    price: "",
    color: "",
  });

  const [isCreated, setCreated] = useState(false);

  const handleChange = (event) => {
    const { title, value } = event.target;
    setProduct({
      ...product,
      [title]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const created = await createProduct(product);
    setCreated({ created });
  };

  if (isCreated) {
    return <Redirect to={`/products`} />;
  }
  return (
    <Layout user={props.user}>
      <div className="product-create">
        <form className="create-form" onSubmit={handleSubmit}>
          <input
            className="input-title"
            placeholder="title"
            value={product.title}
            name="title"
            required
            autoFocus
            onChange={handleChange}
          />
          <input
            className="input-image-link"
            placeholder="Image Link"
            value={product.imgURL}
            name="imgURL"
            required
            onChange={handleChange}
          />
          <textarea
            className="textarea-description"
            rows={10}
            placeholder="Description"
            value={product.description}
            name="description"
            required
            onChange={handleChange}
          />

          <input
            className="input-price"
            placeholder="Price"
            value={product.price}
            name="price"
            required
            onChange={handleChange}
          />
          <input
            className="input-color"
            placeholder="color"
            value={product.color}
            name="color"
            required
            autoFocus
            onChange={handleChange}
          />
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default ProductCreate;
