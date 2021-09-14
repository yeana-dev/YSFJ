import { useState, useEffect } from "react";
import Layout from "../../Components/Layout/Layout";
import { getDetail } from "../../Services/products";
import { deleteProduct } from "../../Services/products";
import { useParams, Link, useHistory } from "react-router-dom";

const Detail = (props) => {
  const [detail, setDetail] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    const fetchProduct = async () => {
      const detail = await getDetail(id);
      setDetail(detail);
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

  return (
    <Layout user={props.user}>
      
      <div className="detail">
        {detail.image_url.map(image => (
        <img
          className="detail-image"
          src={image}
          alt="glasses"
        />
        ))}
        <div className="detail">
          <div className="name">{detail.name}</div>
          <div className="price">{`$${detail.price}`}</div>
          <div className="description">{detail.description}</div>
          <div className="button-container">
            <Link className="edit-button" to={`/products/${detail._id}/edit`}>
              Edit
            </Link>
            <button className="delete-button" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Detail;
