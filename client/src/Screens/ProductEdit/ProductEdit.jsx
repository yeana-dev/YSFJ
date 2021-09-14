import { useState, useEffect } from "react";
import "./ProductEdit.css";
import { useParams, Redirect } from "react-router-dom";
import Layout from "../../Components/Layout/Layout";
import { getProducts, updateProduct } from "../../Services/products";

const ProductEdit = (props) => {
  const [product, setProduct] = useState({
    title: "",
    image_url: "",
    description: "",
    price: "",
    color: "",
  });

  const [isUpdated, setUpdated] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getProducts(id);
      setProduct(product);
    };
    fetchProduct();
  }, [id]);

  const handleChange = (event) => {
    const { title, value } = event.target;
    setProduct({
      ...product,
      [title]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const updated = await updateProduct(id, product);
    setUpdated(updated);
  };

  if (isUpdated) {
    return <Redirect to={`/products/${id}`} />;
  }

  return (
    <Layout user={props.user}>
      <div className="product-edit">
        <div className="image-container">
          <img
            className="edit-product-image"
            src={product.image_url}
            alt={product.title}
          />
          <form onSubmit={handleSubmit}>
            <input
              className="edit-input-image-link"
              placeholder="Image Link"
              value={product.image_url}
              name="image_url"
              required
              onChange={handleChange}
            />
          </form>
        </div>
        <form className="edit-form" onSubmit={handleSubmit}>
          <input
            className="input-title"
            placeholder="Tiltle"
            value={product.title}
            name="title"
            required
            autoFocus
            onChange={handleChange}
          />
          <input
            className="edit-input-image-link"
            placeholder="Image Link"
            value={product.image_url}
            name="image_url"
            required
            onChange={handleChange}
          />
          <textarea
            className="textarea-description"
            rows={10}
            cols={78}
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
            // autoFocus
            onChange={handleChange}
          />
          <button type="submit" className="save-button">
            Save
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default ProductEdit;
