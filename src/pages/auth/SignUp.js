import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "tailwindcss/tailwind.css";

const SignUp = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const HandleSubmit = (e) => {
    e.preventDefault();

    if (!input.name || !input.email || !input.password) {
      alert("Please fill the Requirnment First!");
      return;
    }

    if (input.password.length < 8) {
      alert("Password must be greater than 8 Characters");
      return;
    }
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    existingUsers.push(input);
    localStorage.setItem("users", JSON.stringify(existingUsers));

    setInput({ name: "", email: "", password: "" });
    navigate("/signin");
  };

  // let logIn = () => {
  //   navigate("/homepage");
  // };
  return (
    <div className=" w-[100% ] h-[100vh] flex items-center justify-center bg-[linear-gradient(135deg,_#bfd2e3,_#e8dad3,_#f4d3c0)] ">
      <div className="w-[1100px] max-[360px]:w-[360px] h-[600px] bg-white rounded-[15px]">
        <div className=" flex justify-between max-[360px]:justify-center items-center h-[100%]">
          <div className="w-[500px] h-[500px] max-[360px]:w-[300px] flex flex-col gap-7 p-5 items-center">
            <h1 className=" text-center text-4xl font-bold">Sign Up</h1>
            <form
              className="mt-7 flex flex-col justify-center items-center gap-4 max-[360px]:w-[300px]"
              onSubmit={HandleSubmit}
              autoComplete="off"
            >
              <div className="user-Name">
                <input
                  name="name"
                  value={input.name}
                  onChange={(e) =>
                    setInput({ ...input, [e.target.name]: e.target.value })
                  }
                  type="text"
                  placeholder="Please Enter Your Name"
                  className="flex w-96 h-9 pl-2 rounded max-[360px]:w-[270px] bg-[#e4e4e4] outline-none"
                />
              </div>
              <div className="user-Email">
                <input
                  autoComplete="off"
                  name="email"
                  value={input.email}
                  onChange={(e) =>
                    setInput({ ...input, [e.target.name]: e.target.value })
                  }
                  type="email"
                  placeholder="Please Enter Your Email"
                  className=" flex w-96 h-9 pl-2 rounded max-[360px]:w-[270px]  bg-[#e4e4e4] outline-none "
                />
              </div>
              <div className="user-Password">
                <input
                  autoComplete="new-password"
                  name="password"
                  value={input.password}
                  onChange={(e) =>
                    setInput({ ...input, [e.target.name]: e.target.value })
                  }
                  type="password"
                  placeholder="Please Enter Your Password"
                  className="flex w-96 h-9 pl-2 rounded max-[360px]:w-[270px]  bg-[#e4e4e4] outline-none"
                />
              </div>

              <button
                style={{ marginTop: "20px" }}
                className="button"
                type="submit"
              >
                SignUp
              </button>
            </form>
          </div>

          <div className=" max-[360px]:hidden w-1/2 bg-[#9c786c] rounded-l-full h-full flex items-center justify-center">
            <div className="flex flex-col gap-7 items-center">
              <h1 className="text-3xl font-semibold">
                Your Journey Begins Here!
              </h1>

              <p className=" w-[350px] text-[18px]">
                You’re one step away from turning your vision into reality.
                Create your account and open the door to opportunities, growth,
                and the future you’ve imagined.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
