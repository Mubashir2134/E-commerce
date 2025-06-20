import { useEffect, useState } from "react";
import HomePage from "./pages/HomePage";

// DUMMY DATA IMPORT FROM PAGE

import WomenBags from "./pages/WomenBagPage";
import WomenSmallBags from "./pages/WomenSmallBagPage";
import WomenAccessoris from "./pages/WomenAccessoriesPage";
import WomenShoes from "./pages/WomenShoePage";

import MenBagsPage from "./pages/MenBagsPage";
import MenShoePage from "./pages/MenShoePage";
import MenLeatherGoodsPage from "./pages/MenLeatherGoodsPage";
import MenClothesPage from "./pages/MenClothesPage";

import "./index.css";

import ShopContextProvider from "./contexts/ShopContextProvider";

// import ShoppingCart from "./pages/ShopingCartPage";

// import ShoppingCart from "./pages/ShopingCartPage";
import ShoppingCart from "./pages/ShopingCartPage";
// import ShoppingCart
import "./Style/Gucci1.css";

// AUTH SERVICES AUTH SERVICES
import SignUp from "./pages/auth/SignUp";

import SuccessMsg from "./pages/auth/SuccessMsg";
import SignIn from "./pages/auth/SignIn";

// COMPONETS COMPONETS COMPONETS COMPONETS
import ScrollToTop from "./utils/scrolltTop";

import CardsComponent from "./components/CardComponent";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import ShippingAdress from "./components/ShippingAdress";
import CheckoutDetails from "./pages/CheckoutDetails";
// import PaymentMethod from "./components/PaymentMethod";
const isFirstload = localStorage.getItem(false);

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    if (isFirstload) {
      localStorage.clear();
      localStorage.setItem("firstLoad", "true");
    }
    const loggedInStatus = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(loggedInStatus === "true");
  }, []);
  return (
    <BrowserRouter>
      <ScrollToTop>
        {isLoggedIn ? (
          <>
            <ShopContextProvider>
              <Routes>
                <Route path="/homepage" element={<HomePage />} />
                <Route path="/bags" element={<WomenBags />} />
                <Route path="/smallbag" element={<WomenSmallBags />} />
                <Route path="/womenAccessories" element={<WomenAccessoris />} />

                <Route path="/womenshoe" element={<WomenShoes />} />

                <Route path="/menBag" element={<MenBagsPage />} />
                <Route path="/menshoe" element={<MenShoePage />} />
                <Route path="/leathergood" element={<MenLeatherGoodsPage />} />
                <Route path="/mencloth" element={<MenClothesPage />} />

                <Route path="/cartComponent" element={<ShoppingCart />} />
                <Route path="/maincard" element={<CardsComponent />} />

                <Route path="/shippingAdress" element={<CheckoutDetails />} />
                {/* <Route path="/categories" element={<ShopByCatagories />} /> */}
              </Routes>
            </ShopContextProvider>
          </>
        ) : (
          <Routes>
            <Route
              path="/"
              element={<SignIn setIsLoggedIn={setIsLoggedIn} />}
            />
            <Route
              path="/signin"
              element={<SignIn setIsLoggedIn={setIsLoggedIn} />}
            />
            <Route path="/homepage" element={<HomePage />} />

            <Route path="/signup" element={<SignUp />} />
            <Route path="/successMsg" element={<SuccessMsg />} />
          </Routes>
        )}
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
