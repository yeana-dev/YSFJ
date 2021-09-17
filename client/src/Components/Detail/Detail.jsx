import "./Detail.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Detail = (props) => {
  const [selected, setSelected] = useState("");

  const handleSelect = (color) => {
    setSelected(color);
  };

  return (
    <div className="detail-products">
      <Link className="product-card" to={`/products/${props._id}`}>
        <img
          className="product-image"
          src={props.image_url}
          alt={props.title}
        />
        <div className="text-box">
          <div className="product-title">{props.title}</div>
          <div className="price">{`$${props.price}`}</div>
        </div>
        <div className="product-color">
          {props.color.map((color, index) => (
            <button
              style={{ backgroundColor: color }}
              id={`${selected === color ? `selected` : null}`}
              key={index}
              onClick={() => {
                handleSelect(color);
              }}
            ></button>
          ))}
        </div>
      </Link>
    </div>
  );
};
export default Detail;
