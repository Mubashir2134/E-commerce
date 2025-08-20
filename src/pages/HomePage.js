import FeaturesSection from "./FeaturesSection";
import CardsComponent from "../components/CardComponent";
import ShopByCatagories from "../components/ShopByCatagories";
import VideoSec from "../pages/VideosSection";
import ScrollToTop from "../utils/scrolltTop";
import NavBar from "../components/NavBar";
import BackGroundVideo from "./BackGroundVideo";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <ScrollToTop>
        <NavBar />
        <BackGroundVideo />
        <FeaturesSection />
        <CardsComponent />
        <ShopByCatagories />
        <VideoSec />
        <Footer />
      </ScrollToTop>
    </>
  );
};
export default HomePage;
