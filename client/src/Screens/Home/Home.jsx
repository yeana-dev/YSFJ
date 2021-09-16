import Layout from "../../Components/Layout/Layout";
import HomeCarousel from "../../Components/Carousel/HomeCarousel";
import ProductList from "../../Components/ProductList/ProductList";
import "./Home.css";

const Home = (props) => {
  return (
    <Layout user={props.user}>
      <div className="home-container">
        <HomeCarousel />
      </div>
      <div className="home-best-sellers">
        <header>OUR BEST SELLERS</header>
        <ProductList />
      </div>
    </Layout>
  );
};

export default Home;
