import ProductCard from "../components/ProductCard";
import { WomenShoe } from "../DummyData/WomenShoe";
import NavBar from "../components/NavBar";

import Footer from "../components/Footer";
const WomenShoes = () => {
  return (
    <>
      <NavBar />
      {/* <div className=" w[100%] h-[100vh]"> */}
        <img className=" w-[100%] h-[100vh] object-cover" src="/womenShoe/BG.jpg" />
      {/* </div> */}
      <div className="  gap-[40px] flex flex-wrap m-[50px] max-[360px]:m-[25px]  max-[360px]:gap-[20px]  items-center justify-between">
        {WomenShoe.map((product) => (
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
export default WomenShoes;
