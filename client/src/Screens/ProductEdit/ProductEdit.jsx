import { useState, useEffect } from "react";
import "./ProductEdit.css";
import { useParams, Redirect } from "react-router-dom";
import Layout from "../../Components/Layout/Layout";
import { getDetail, updateProduct } from "../../Services/products";

const ProductEdit = (props) => {
  const [product, setProduct] = useState({
    title: "",
    image_url: "",
    description: "",
    price: "",
    color: "",
  });

  const [isUpdated, setUpdated] = useState(false);
  const [previewImage, setPreviewImage] = useState(product.image_url[0]);
  let { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getDetail(id);
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
    setPreviewImage(product.image_url);
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
      <div className="image-container">
        <img
          className="productCreate-image"
          src="https://i.imgur.com/ZyxC5VY.png?1"
          alt="header image"
        />
        <div className="new-product">New Products</div>
      </div>
      <div className="glassImg-container2">
        <img
          className="edit-product-image"
          src={previewImage}
          alt={product.title}
        />
      </div>
      <div className="content-container">
        <div className="product-edit">
          <form className="edit-form" onSubmit={handleSubmit}>
            <input
              className="edit-title"
              placeholder="Tiltle"
              value={product.title}
              name="title"
              required
              autoFocus
              onChange={handleChange}
            />
            <input
              className="edit-image-link"
              placeholder="Image Link"
              value={product.image_url}
              name="image_url"
              required
              onChange={handleChange}
            />
            <input
              className="edit-image-link"
              placeholder="Image Link"
              value={product.image_url}
              name="image_url"
              required
              onChange={handleChange}
            />

            <input
              className="edit-price"
              placeholder="Price"
              value={product.price}
              name="price"
              required
              onChange={handleChange}
            />
            <input
              className="edit-color"
              placeholder="color"
              value={product.color}
              name="color"
              required
              // autoFocusadd
              onChange={handleChange}
            />
            <textarea
              className="edit-description"
              rows={10}
              cols={78}
              placeholder="Description"
              value={product.description}
              name="description"
              required
              onChange={handleChange}
            />
            <button type="submit" className="save-button">
              Save
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default ProductEdit;
