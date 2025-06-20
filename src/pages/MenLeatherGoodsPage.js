import ProductCard from "../components/ProductCard";

import { MenLeatherGoodsData } from "../DummyData/MenSmallLeatherGoods";

import NavBar from "../components/NavBar";

import Footer from "../components/Footer";
let MenLeatherGoodsPage = () => {
  return (
    <>
      <NavBar />
      <div className="image-Box">
        <img className="Bg-Image" src="/LeatherGood/Bg.jpg" />
      </div>
      <div className=" my-[70px] mx-[40px] flex flex-wrap items-center justify-between">
        {MenLeatherGoodsData.map((product) => (
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
export default MenLeatherGoodsPage;
