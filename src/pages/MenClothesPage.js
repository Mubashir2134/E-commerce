import ProductCard from "../components/ProductCard";
// import Bags from "./Bag";

import { MenClothesData } from "../DummyData/MenClothes";

import NavBar from "../components/NavBar";

import Footer from "../components/Footer";
let MenClothesPage = () => {
  return (
    <>
      <NavBar />
      {/* <div className="image-Box"> */}
        <img className="Bg-Image w-[100%] h-[100vh] object-cover" src="/MenCloth/Bg2.jpg" />
      {/* </div> */}
      <div className="  flex flex-wrap m-[50px] max-[360px]:m-[25px] max-[360px]:justify-center gap-[40px] max-[360px]:gap-[20px]  items-center justify-between ">
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
