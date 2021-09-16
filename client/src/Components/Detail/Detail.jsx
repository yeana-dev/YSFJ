import "./Detail.css";
import { Link } from "react-router-dom";
import { useState, } from "react";

const Detail = (props) => {
  // const [colors, setColor] = useState("")
  const [selected, setSelected] = useState("")


  const handleSelect = (color) => {
    setSelected(color)
    console.log(selected)
  }


  // const handleColors = (selection) => {

  //   return (
  //     <>

  //       <div className='color-circles'>{setColor(selection)}</div>
  //       {colors.map((color) => (
  //         <div className='bigger-circle'>{color}</div>
  //       ))}


  //     </>
  //   )


  // }
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
          </div>
        </div>
      </Link>
      {props.color.map((color, index) => (
        <button style={{ backgroundColor: color }} className={`${selected === color ? `selected` : null}`} key={index} onClick={() => { handleSelect(color) }} ></button>)
      )}

    </div >
  );
};
export default Detail;
