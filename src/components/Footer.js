import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";
let Footer = () => {
  const navigate = useNavigate();

  const mencloth = () => {
    navigate("/mencloth");
  };

  const menBag = () => {
    navigate("/menBag");
  };
  const menshoes = () => {
    navigate("/menShoe");
  };
  const WomenBags = () => {
    navigate("/bags");
  };
  const womenshoes = () => {
    navigate("/womenshoe");
  };

  return (
    <>
      <div className=" w-[100%] bg-[lightgray]">
        <div className=" p-[40px] flex justify-between">
          <div className=" flex start-0 flex-col gap-5">
            <h3 className="text-xl font-semibold">Company Info</h3>
            <p className="cursor-pointer">About Us</p>
            <p className="cursor-pointer">Careers</p>
            <p className="cursor-pointer">Press</p>
            <p className="cursor-pointer">Blog</p>
          </div>

          <div className="flex start-0 flex-col gap-5">
            <h3 className="text-xl font-semibold">Customer Service</h3>
            <p className="cursor-pointer">Contact Us</p>
            <p className="cursor-pointer">FAQs</p>
            <p className="cursor-pointer">Shipping & Returns</p>
            <p className="cursor-pointer">Secure Payment</p>
            <p className="cursor-pointer">100% Authenticity</p>
          </div>

          <div className="flex start-0 flex-col gap-5">
            <h3 className="text-xl font-semibold">Categories</h3>
            <p className="cursor-pointer" onClick={mencloth}>
              {" "}
              Men’s Clothing
            </p>
            <p className="cursor-pointer" onClick={menBag}>
              Men’s Bags
            </p>
            <p className="cursor-pointer" onClick={menshoes}>
              Men’s Shoes
            </p>
            <p className="cursor-pointer" onClick={WomenBags}>
              Women's Bags
            </p>
            <p className="cursor-pointer" onClick={womenshoes}>
              {" "}
              Women’s Shoes
            </p>
          </div>

          <div className="flex start-0 flex-col gap-5">
            <h3 className="text-xl font-semibold">Follow Us</h3>
            <FontAwesomeIcon
              className=" text-xl cursor-pointer"
              icon={faTwitter}
            />
            <FontAwesomeIcon
              className=" text-xl cursor-pointer"
              icon={faFacebook}
            />
            <FontAwesomeIcon
              className=" text-xl cursor-pointer"
              icon={faInstagram}
            />
            <FontAwesomeIcon
              className=" text-xl cursor-pointer"
              icon={faYoutube}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
