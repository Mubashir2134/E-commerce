import ProductCard from "../components/ProductCard";
import { WomenBagData } from "../DummyData/WomenBags";

// import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import NavBar from "../components/NavBar";

let WomenBags = () => {
  return (
    <>
      <NavBar />
      <div className=" w-[100%] h-[100vh] bottom-[50px]">
        <img
          className=" w-[100%] h-[100vh] bg-center object-cover"
          src="/Bags/BG.jpg"
        />
      </div>
      <div className=" my-[70px] mx-[40px] flex flex-wrap items-center justify-between">
        {WomenBagData.map((product) => (
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
export default WomenBags;
