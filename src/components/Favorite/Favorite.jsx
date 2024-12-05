import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../Product/ProductCard/ProductCard";

const Favorite = () => {
  const { favorite } = useSelector((s) => s.todo);
  return (
    <div>
      <div className="container">
        <div className=" flex flex-wrap gap-[200px] mt-[50px] items-center">
          {favorite.map((el) => (
            <ProductCard el={el} key={el.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorite;
