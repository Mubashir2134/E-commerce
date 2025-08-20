import ProductCard from "../components/ProductCard";
// import Bags from "./Bag";

import { MenBagsData } from "../DummyData/MenBags";
import NavBar from "../components/NavBar";

import Footer from "../components/Footer";

let MenBagsPage = () => {
  return (
    <>
      <NavBar />
      {/* <div className="image-Box"> */}
      <img
        className="Bg-Image max-[360px]:w-[100%] max-[360px]:h-[100vh] object-cover"
        src="/MenBag/Bg.jpg"
      />
      {/* </div> */}
      {/* <div className="gap-[40px] flex flex-wrap my-[50px] mx-[40px]  items-center justify-between  max-[360px]:flex-col max-[360px]:gap-[20px] max-[360px]:px-[20px] "> */}
      <div className="  flex flex-wrap m-[50px] max-[360px]:m-[25px] max-[360px]:justify-center gap-[40px] max-[360px]:gap-[20px]  items-center justify-between ">

        {MenBagsData.map((product) => (
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
export default MenBagsPage;
