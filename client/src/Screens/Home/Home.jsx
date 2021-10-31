import HomeCarousel from "../../Components/Carousel/HomeCarousel";
import ProductList from "../../Components/ProductList/ProductList";
import "./Home.css";

const Home = (props) => {
  return (
    <div className="home-container">
      <HomeCarousel />
      <div className="home-best-sellers">
        <header>OUR BEST SELLERS</header>
        <ProductList />
      </div>
    </div>
  );
};

export default Home;
