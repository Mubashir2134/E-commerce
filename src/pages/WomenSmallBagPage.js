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
      {/* <div className=" w-[100%] h-[100vh]"> */}
        <img className=" w-[100%] h-[100vh] object-cover" src="/SmallBag/BG.jpg" />
      {/* </div> */}
      <div className=" m-[50px] max-[360px]:m-[25px] flex flex-wrap gap-[40px] max-[360px]:gap-[20px]  items-center justify-between ">
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
