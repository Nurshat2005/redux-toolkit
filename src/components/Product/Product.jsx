import React from "react";
import ProductCard from "./ProductCard/ProductCard";
import { useSelector } from "react-redux";

const Product = () => {
  const { product } = useSelector((s) => s.todo);
  return (
    <div>
      <div className="">
        <div className=" flex items-center flex-wrap gap-[150px] ">
          {product.map((el) => (
            <ProductCard el={el} key={el.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
