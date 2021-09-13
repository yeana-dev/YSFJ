import Layout from "../../Components/Layout/Layout";
import HomeCarousel from "../../Components/Carousel/HomeCarousel";
import ProductList from "../../Components/ProductList/ProductList";
import "./Home.css";

const Home = () => {
  return (
    <Layout>
      <div className="container">
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
