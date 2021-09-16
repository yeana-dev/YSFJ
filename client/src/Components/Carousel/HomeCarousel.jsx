import Carousel from "react-bootstrap/Carousel";
import { images } from "../../Services/carousel";
import "./HomeCarousel.css";

const imagesCarousel = () => {
  return (
    <Carousel>
      {images.map((data, index) => (
        <Carousel.Item key={index}>
          <img id="d-block w-100" src={data.imgUrl} alt={data.alt} />
          <Carousel.Caption>
            <div className={`slide-${index + 1}`}>
              <h3>{data.header}</h3>
              <p>{data.sub}</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default imagesCarousel;
