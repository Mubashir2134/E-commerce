// import OurCatagories from "./CardComponent";
// import { CardsComponent } from "./CardComponent";

import CardsComponent from "./CardComponent";
// import { Link } from "react-router-dom";

const ShopByCatagories = () => {
  return (
    <>
      <div className=" flex flex-col items-center m-[50px] gap-[40px] max-[360px]:m-[25px]">
        {/* <div className="shopBy"> */}
          <h1 className=" text-[36px] max-[360px]:text-[25px] font-bold">Shop by Category</h1>
        {/* </div> */}
        <div className=" w-[100%] flex min-[360px]:flex-wrap max-[360px]:flex-col max-[360px]:gap-[20px] gap-[40px] max-[360px]:justify-center justify-between items-center text-center">
          <CardsComponent
            img="/Images/Women-Bag.webp"
            heading="Women's Bags"
            path="/bags"
          />

          <CardsComponent
            img="/Images/Leather-Goods.webp"
            heading="Women's Small Leather Goods"
            path="/smallbag"
          />
          <CardsComponent
            img="/Images/Women-Shoes.webp"
            heading="Women's Shoes"
            path="/womenshoe"
          />
          <CardsComponent
            img="/Images/Women_Accessories.webp"
            heading="Women's Accessories"
            path="/womenAccessories"
          />
          <CardsComponent
            img="/Images/Men-Bag.webp"
            heading="Men's Bag"
            path="/menBag"
          />
          <CardsComponent
            img="/Images/Men_Shoes.webp"
            heading="Men's Sneakers"
            path="/menshoe"
          />
          <CardsComponent
            img="/Images/Men_WSLG.webp"
            heading="Men's Small Leather Goods"
            path="/leathergood"
          />
          <CardsComponent
            img="/Images/Men_RTW.webp"
            heading="Men's Ready-to-Wear"
            path="/mencloth"
          />
        </div>
      </div>
      <div className="BackGround-Img">
        <img className=" w-[100%] bg-center" src="/images/Bg.avif" />
      </div>
    </>
  );
};
export default ShopByCatagories;
