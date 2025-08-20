import ProductCard from "../components/ProductCard";
// import Bags from "./Bag";
import NavBar from "../components/NavBar";

import Footer from "../components/Footer";
import { MenShoeData } from "../DummyData/MenShoe";
let MenShoePage = () => {
  return (
    <>
      <NavBar />
      {/* <div className="image-Box"> */}
        <img className=" w-[100%] h-[100vh] Bg-Image object-cover" src="/MenShoe/Bg.jpg" />
      {/* </div> */}
      <div className="  flex flex-wrap m-[50px] max-[360px]:m-[25px] max-[360px]:justify-center gap-[40px] max-[360px]:gap-[20px]  items-center justify-between ">
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
