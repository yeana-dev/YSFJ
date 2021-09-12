import "./Detail.css";
import { Link } from "react-router-dom";

const Detail = (props) => {
  return (
    <div className="detail-products">
      <Link className="card" to={`/products/${props._id}`}>
        <img
          className="product-image"
          src={props.image_url}
          alt={props.title}
        />
        <div className="product-title">{props.title}</div>
        <div className="price">{`$${props.price}`}</div>
        <div className="color">{`Best selling Color:${props.color}`}</div>
      </Link>
    </div>
  );
};
export default Detail;
