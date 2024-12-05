import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [modal, setModal] = useState(false);
  return (
    <div>
      <div className="navbar ">
        <div className="flex items-center justify-between">
          <Link to={"/"}>
            <h1>WEB_STORE</h1>
          </Link>
        </div>
        <div className=" w-[320px] mt-[10px] relative">
          <i className="fa-solid fa-magnifying-glass absolute right-[14px] bottom-[30px]"></i>
          <input
            className=" border-b-[2px] border-[#0000005b] border-solid outline-none p-[10px] bg-transparent  w-[300px] text-black p-[20px] font-[100]"
            type="text"
            placeholder="   Search"
          />
        </div>
        <div
          style={{
            display: modal ? "block" : "none",
          }}
          className="menu absolute right-[5rem] top-[80px] w-[400px] h-[300px] z-[99]"
        >
          <ul className="links flex items-center justify-between gap-[2px] flex-col font-[100]">
            <li>
              <Link to={"/"}>
                <h1>Home</h1>
              </Link>
            </li>
            <li>
              <Link to={"/favorite"}>
                <h1>Favorite</h1>
              </Link>
            </li>
            <li>
              <Link to={"/shop"}>
                <h1>Shop</h1>
              </Link>
            </li>
            <li>
              <a href="tel:+996220242110">
                <h1>Contact</h1>
              </a>
            </li>
            <li>
              <Link to={"/admin"}>
                <h1>Admin</h1>
              </Link>
            </li>
          </ul>
        </div>
        <div className="btn flex items-center justify-between gap-[100px]">
          <i
            onClick={() => setModal(!modal)}
            className="li fa-duotone fa-solid fa-bars text-white cursor-pointer"
          ></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
