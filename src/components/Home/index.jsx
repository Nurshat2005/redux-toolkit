import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../Product/ProductCard/ProductCard";

const Home = () => {
  const { product } = useSelector((s) => s.todo);

  return (
    <div>
      <div className="container">
        <div className=" flex flex-wrap  gap-[200px]">
          {product.map((el) =>
            el.price > 500 ? <ProductCard el={el} key={el.id} /> : null
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
