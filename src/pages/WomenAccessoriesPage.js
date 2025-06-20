import ProductCard from "../components/ProductCard";
import { WomenAccessoriesData } from "../DummyData/WomenAccessories";
import NavBar from "../components/NavBar";

import Footer from "../components/Footer";
const WomenAccessoris = () => {
  return (
    <>
      <NavBar />
      <div className="image-Box">
        <img className="Bg-Image" src="/womenAccessories/BG.jpg" />
      </div>
      <div className=" my-[70px] mx-[40px] flex flex-wrap items-center justify-between">
        {WomenAccessoriesData.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            productName={product.productName}
            productPrice={product.productPrice}
            miniImg={product.imgUrl}
          />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default WomenAccessoris;
