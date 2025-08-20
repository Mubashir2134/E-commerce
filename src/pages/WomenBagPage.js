import ProductCard from "../components/ProductCard";
import { WomenBagData } from "../DummyData/WomenBags";

// import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import NavBar from "../components/NavBar";

let WomenBags = () => {
  return (
    <>
      <NavBar />
      {/* <div className=" w-[100%] h-[100vh] bottom-[50px]"> */}
      <img
        className=" w-[100%] h-[100vh] bg-center object-cover"
        src="/Bags/BG.jpg"
      />
      {/* </div> */}
      {/* <div className="  gap-[40px] flex flex-wrap m-[50px] max-[360px]:m-[25px]  max-[360px]:gap-[20px]  items-center justify-between"> */}
      <div className="  flex flex-wrap m-[50px] max-[360px]:m-[25px] max-[360px]:justify-center gap-[40px] max-[360px]:gap-[20px]  items-center justify-between ">
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
