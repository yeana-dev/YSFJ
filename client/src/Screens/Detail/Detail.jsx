import { useState, useEffect } from "react";
import Layout from "../../Components/Layout/Layout";
import { getDetail } from "../../Services/products";
import { deleteProduct } from "../../Services/products";
import { useParams, Link, useHistory } from "react-router-dom";
import "./Detail.css";

const Detail = (props) => {
  const [detail, setDetail] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const [renderedImage, setRenderedImage] = useState("");
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    const fetchProduct = async () => {
      const detail = await getDetail(id);
      setDetail(detail);
      setRenderedImage(detail.image_url[0]);
      setLoaded(true);
    };
    fetchProduct();
  }, [id]);

  const handleDelete = () => {
    deleteProduct(detail._id);
    history.push("/products");
  };

  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }
  const authenticatedOptions = (
    <>
      <div className="button-container">
        <Link className="edit-button" to={`/products/${detail._id}/edit`}>
          Edit
        </Link>
        <button className="delete-button" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </>
  );

  const unauthenticatedOptions = (
    <>
      <div className="add-to-cart">
        <button onClick={handleAddProduct(product)}>Add to cart</button>
      </div>
    </>
  );

  return (
    <Layout user={props.user}>
      <div className="detail">
        {detail.image_url.map((image, index) => (
          <img
            className="detail-image"
            src={image}
            alt="glasses"
            key={index}
            onClick={() => {
              setRenderedImage(image);
            }}
          />
        ))}
        {props.user !== null && props.user.username === detail.createdBy
          ? authenticatedOptions
          : unauthenticatedOptions}
        <div className="detail">
          <img src={renderedImage} alt="glasses" id="rendered-image" />
          <div className="name">{detail.name}</div>
          <div className="price">{`$${detail.price}`}</div>
          <div className="description">{detail.description}</div>
        </div>
      </div>
    </Layout>
  );
};

export default Detail;
