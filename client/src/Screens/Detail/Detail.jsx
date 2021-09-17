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
    history.push("/delete");
  };

  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }
  const authenticatedOptions = (
    <div className="edit-delete">
      <Link className="edit-button" to={`/products/${detail._id}/edit`}>
        <button>
          <i className="far fa-edit"></i>
        </button>
      </Link>
      <button className="delete-button" onClick={handleDelete}>
        <i className="far fa-trash-alt"></i>
      </button>
    </div>
  );

  const unauthenticatedOptions = (
    null
    // <>
    //   {detail.userId === props.user.id ?
    //     null :
    //     <div className="add-to-cart">
    //       <button onClick>Add to cart</button>
    //     </div>
    //   }
    // </>
  );

  return (
    <Layout user={props.user}>
      <div className="detail-container">
        <div className="detail-left">
          <div className="image-thumbnails">
            {detail.image_url.map((image, index) => (
              <img
                className="detail-image"
                src={image}
                alt="glasses"
                key={index}
                onMouseEnter={() => {
                  setRenderedImage(image);
                }}
              />
            ))}
          </div>
          <img src={renderedImage} alt="glasses" id="rendered-image" />
        </div>
        <div className="detail-right">
          <div className="detail-top">
            <div className="detail-top-left">
              <div className="title">{detail.title}</div>
              <div className="price">{`$${detail.price}`}</div>
            </div>
            {props.user !== null && props.user.username === detail.createdBy
              ? authenticatedOptions
              : unauthenticatedOptions}
          </div>
          <hr />
          <div className="detail-color">{detail.color}</div>
          <hr />
          <div className="detail-description">{detail.description}</div>
        </div>
      </div>
    </Layout>
  );
};

export default Detail;
