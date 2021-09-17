import { useState } from "react";
import "./ProductCreate.css";
import { Redirect } from "react-router-dom";
import { createProduct } from "../../Services/products";
import Layout from "../../Components/Layout/Layout";

const ProductCreate = (props) => {
  const user = props.user.username;
  const [product, setProduct] = useState({
    title: "",
    image_url: [],
    description: "",
    price: "",
    color: "",
    createdBy: user,
  });

  const [isCreated, setCreated] = useState(false);

  const handleChange = (event) => {
    const { name, value, dataset } = event.target;
    const { id } = dataset;
    if (name === "image_url") {
      const updatedProduct = { ...product };
      updatedProduct.image_url[id] = value;
      setProduct(updatedProduct);
    } else {
      setProduct({
        ...product,
        [name]: value,
      });
    }
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
        <div className="header-container">
          <img
            className="productCreate-image"
            src="https://i.imgur.com/ZyxC5VY.png?1"
            alt="header image"
          />
          <div className="product-form-header">New Products</div>
        </div>
        <form className="create-form" onSubmit={handleSubmit}>
          <div className="preview-image-container">
            {product.image_url[0] ? (
              <img
                className="preview-image"
                src={product.image_url[0]}
                alt="preview"
              />
            ) : (
              <div className="preview-goes-here">Thumbnail Preview</div>
            )}
          </div>
          <input
            className="image-input-0"
            placeholder="Image Link 1 (Thumbnail)"
            value={product.image_url[0]}
            name="image_url"
            data-id="0"
            required
            onChange={handleChange}
          />
          <input
            className="image-input-1"
            placeholder="Image Link 2"
            value={product.image_url[1]}
            name="image_url"
            data-id="1"
            required
            onChange={handleChange}
          />
          <input
            className="image-input-2"
            placeholder="Image Link 3"
            value={product.image_url[2]}
            name="image_url"
            data-id="2"
            required
            onChange={handleChange}
          />
          <input
            className="image-input-3"
            placeholder="Image Link 4"
            value={product.image_url[3]}
            name="image_url"
            data-id="3"
            required
            onChange={handleChange}
          />
          <input
            className="input-title"
            placeholder="Title"
            value={product.title}
            name="title"
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
            onChange={handleChange}
          />
          <textarea
            className="input-description"
            rows={10}
            placeholder="Description"
            value={product.description}
            name="description"
            required
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
