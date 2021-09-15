import "./Detail.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Detail = (props) => {
  const [colors, setColor] = useState("")

  useEffect(() => {
    setColor(props.color[0])
  }, [])




  return (
    <div className="detail-products">
      <Link className="card" to={`/products/${props._id}`}>
        <img
          className="product-image"
          src={props.image_url}
          alt={props.title}
        />
        <div className='text-box'>
          <div className="product-title">{props.title}</div>
          <div className="price">{`$${props.price}`}</div>
          <div className='color-container'>
            <div className="color">{`Select from ${props.color.length} colors:`} </div>
            {props.color.map((color) => {
              <div onClick={() => { setColor(color) }}>
                {color}</div>
            }
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};
export default Detail;
