import WomenBags from "../pages/WomenBagPage";
import WomenSmallBags from "../pages/WomenSmallBagPage";
import WomenAccessoris from "../pages/WomenAccessoriesPage";
import WomenShoes from "../pages/WomenShoePage";
import MenBagsPage from "../pages/MenBagsPage";
import MenShoePage from "../pages/MenShoePage";
import MenClothesPage from "../pages/MenClothesPage";
import MenLeatherGoodsPage from "../pages/MenLeatherGoodsPage";

export const CombinedData = [
  ...WomenBags,
  ...WomenSmallBags,
  ...WomenAccessoris,
  ...WomenShoes,
  ...MenBagsPage,
  ...MenShoePage,
  ...MenClothesPage,
  ...MenLeatherGoodsPage,
];

console.log("this is combined data: ", CombinedData);
