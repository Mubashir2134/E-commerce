import { Link } from "react-router-dom";

function CardsComponent({ path, img, heading }) {
  return (
    <Link
      to={path}
      // className=" flex flex-col items-center cursor-pointer gap-5"
      style={{ textDecoration: "none", color: "black" }}
    >
      <img src={img} className=" w-[300px] " />

      <p className="heading">{heading}</p>
    </Link>
  );
}

export default CardsComponent;
