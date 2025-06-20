import ProductCard from "../components/ProductCard";
// import Bags from "./Bag";
import { WomenSmallBag } from "../DummyData/WomenSmallBags";
// import WomenSmallBagsData from "../DummyData/WomenSmallBags";

import NavBar from "../components/NavBar";

import Footer from "../components/Footer";
const WomenSmallBags = () => {
  return (
    <>
      <NavBar />
      <div className=" w-[100%] h-[100vh]">
        <img className=" w-[100%] h-[100vh]" src="/SmallBag/BG.jpg" />
      </div>
      <div className=" my-[70px] mx-[40px] flex flex-wrap items-center justify-between">
        {WomenSmallBag.map((product) => (
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
export default WomenSmallBags;
