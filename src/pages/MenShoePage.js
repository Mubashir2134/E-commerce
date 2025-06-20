import ProductCard from "../components/ProductCard";
// import Bags from "./Bag";
import NavBar from "../components/NavBar";

import Footer from "../components/Footer";
import { MenShoeData } from "../DummyData/MenShoe";
let MenShoePage = () => {
  return (
    <>
      <NavBar />
      <div className="image-Box">
        <img className="Bg-Image" src="/MenShoe/Bg.jpg" />
      </div>
      <div className=" my-[70px] mx-[40px] flex flex-wrap items-center justify-between">
        {MenShoeData.map((product) => (
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
export default MenShoePage;
