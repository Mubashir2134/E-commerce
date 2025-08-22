import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import "../Style/Gucci1.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCartShopping,
  faClose,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";

let NavBar = () => {
  const navigate = useNavigate();

  const [PopUp, setPopUp] = useState(false);
  const [search, setSearch] = useState(false);
  const [contact, setContact] = useState(0);

  const [scrollPosition, setScrollPosition] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showCotact = () => {
    setContact(true);
    document.body.style.overflow = "hidden";
  };
  const hideContact = () => {
    setContact(false);
    document.body.style.overflow = "auto";
  };

  const showMenu = () => {
    setPopUp(true);
    document.body.style.overflow = "hidden";
  };

  const hideMenu = () => {
    setPopUp(false);
    document.body.style.overflow = "auto";
  };

  const showSearch = () => {
    setSearch(true);
  };

  const hideSearch = () => {
    setSearch(false);
  };
  const location = useLocation();
  // console.log(location);

  const CardComponent = () => {
    navigate("/cartComponent");
  };
  const homePage = () => {
    navigate("/homepage");
  };

  return (
    <>
      <div className=" w-full fixed  h-[10vh] flex content-between items-center bg-[lightgray] text-center  ">
        <div className=" flex justify-between items-center w-[100%] px-[40px] max-[360px]:px-[20px]   ">
          <div
            className=" text-xl  font-semibold max-[360px]:font-medium max-[360px]:text-[16px] cursor-pointer"
            onClick={showCotact}
          >
            +Contact
          </div>
          <div
            className={
              location.pathname === "/homepage"
                ? scrollPosition > 0
                  ? "div2 shrink"
                  : "div2 expand"
                : "div2 shrink"
            }
          >
            {/* GUCCI */}
            Louis Vuitton
            {/* Jutti */}
          </div>
          {scrollPosition === 0 && location.pathname === "/" && (
            <div className="mylogo">Al-Qazi Group Of Companies</div>
          )}
          <div className="flex items-center justify-between w-[110px] max-[360px]:w-[70px] text-xl max-[360px]:text-[30px]">
            {/* <Link to="cartComponent" className="cart"> */}
            <FontAwesomeIcon
              className="text-[18px]"
              onClick={CardComponent}
              id="icon"
              icon={faCartShopping}
              style={{ color: "black" }}
            />
            {/* </Link> */}
            <FontAwesomeIcon
              className="text-[18px]"
              id="icon"
              icon={faSearch}
              onClick={showSearch}
            />
            <FontAwesomeIcon
              className="text-[18px]"
              id="icon"
              icon={faBars}
              onClick={showMenu}
            />
          </div>
        </div>
      </div>
      {/* console.log("Cart Count:", cartCount); */}
      {PopUp && (
        <div
          className=" w-[100%] h-[100vh] fixed top-0 overflow-y-hidden backdrop-blur-md"
          onClick={hideMenu}
        >
          <div id="menu-div" onClick={(e) => e.stopPropagation()}>
            <div
              className=" absolute top-4 right-4  max-[360px]:right-10 ml-[200px] flex  items-center justify-center w-[50px] h-[50px] bg-white rounded-full transition duration-100 ease hover:scale-90"
              onClick={hideMenu}
            >
              <FontAwesomeIcon id="close-btn" icon={faClose} />
            </div>

            <div className="flex flex-col justify-between my-[130px] mx-[70px] h-[40vh] text-xl">
              <p onClick={homePage}>Home</p>
              <p>Our Products</p>
              <p>Women</p>
              <p>Men</p>
              <p>Gifts</p>
              <p>About Us</p>
            </div>
          </div>
        </div>
      )}
      {search && (
        <div
          className=" absolute top-[80px] w-[400px] h-[500px] right-[200px] bg-white"
          fixed
        >
          <div className="w-[100%] flex justify-between items-center px-[10px] py-[10px]">
            <input
              className=" w-[210px] h-[30px]   bg-none border-2 border-black outline-none rounded-lg p-2"
              placeholder="What are you Looking For?"
            />
            <p className=" cursor-pointer" onClick={hideSearch}>
              Cancel
            </p>
          </div>

          <div className="p-4 h-[200px] flex flex-col justify-between">
            <p>TRENDING SEARCHES</p>
            <p>
              <FontAwesomeIcon id="icon" icon={faSearch} />
              Watches
            </p>
            <p>
              <FontAwesomeIcon id="icon" icon={faSearch} />
              Shoes
            </p>
            <p>
              <FontAwesomeIcon id="icon" icon={faSearch} />
              Handbags
            </p>
          </div>
        </div>
      )}
      {contact && (
        <div
          className=" w-[100%] h-[100vh] backdrop-blur-md top-0 fixed overflow-y-hidden"
          onClick={hideContact}
        >
          <div className="contact-div">
            <div
              id="close2"
              className="  flex items-center justify-center max-[360px]:ml-[20px] max-[360px]:w-[30px] max-[360px]:h-[30px] w-[50px] h-[50px] rounded-full bg-white transition duration-100 ease hover:scale-90 cursor-pointer"
              onClick={hideContact}
            >
              <FontAwesomeIcon  id="close-btn" icon={faClose} />
            </div>

            <div className=" w-[100%]  flex flex-col justify-center  gap-[30px]  text-xl">
              <p className="  text-[16px]  max-[360px]:hidden">
                Wherever you are, Louis Vuitton Client Advisors will be
                delighted to assist you.
              </p>
              <p className="text-[18px]">+92 3228530477</p>
              <p className="text-[18px]">Need Help?</p>
              <p className="text-[18px]">FAQ</p>
              <p className="text-[18px]">Care Services</p>
              <p className="text-[18px]">Find a Store</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
