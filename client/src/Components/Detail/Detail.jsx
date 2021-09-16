import "./Detail.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Detail = (props) => {

  const [selected, setSelected] = useState("")



  const handleSelect = (color) => {
    setSelected(color)

  }

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
            <div className="color">{`Select from these colors:`} </div>
          </div>
        </div>
      </Link>
      {props.color.map((color, index) => (
        <button style={{ backgroundColor: color }} className={`${selected === color ? `selected` : null}`} key={index} onClick={() => { handleSelect(color) }} ></button>)
      )

      }


    </div >
  );
};
export default Detail;
