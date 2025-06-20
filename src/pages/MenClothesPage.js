import ProductCard from "../components/ProductCard";
// import Bags from "./Bag";

import { MenClothesData } from "../DummyData/MenClothes";

import NavBar from "../components/NavBar";

import Footer from "../components/Footer";
let MenClothesPage = () => {
  return (
    <>
      <NavBar />
      <div className="image-Box">
        <img className="Bg-Image" src="/MenCloth/Bg2.jpg" />
      </div>
      <div className=" my-[70px] mx-[40px] flex flex-wrap items-center justify-between">
        {MenClothesData.map((product) => (
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
export default MenClothesPage;
