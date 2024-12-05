import React from "react";
import InnerImageZoom from "react-inner-image-zoom";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { AddFavorite, DelFav, DelTodo } from "../../redux/reducer/TodoSlice";
import { CiShoppingBasket } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ el }) => {
  const Navigate = useNavigate();
  const { favorite } = useSelector((s) => s.todo);
  const dispatch = useDispatch();
  const Day = new Date().getDate().toString();
  let newDate = new Date();
  const mounth = newDate.toLocaleString("default", { month: "long" });
  const Some = favorite.some((som) => som.id === el.id);
  const ADDdel = () => {
    if (Some) {
      dispatch(DelFav(el.id));
    } else {
      Navigate("/favorite");
      dispatch(AddFavorite(el));
    }
  };
  return (
    <div className="">
      <div className="w-[370px] h-[790px] bg-white rounded-[12px]  flex flex-col items-start  justify-start gap-[10px] relative shadow-[5px_5px_0px_0px_rgba(109,40,217)]">
        <div className=" mt-[30px] oveflow-hidden relative ">
          <InnerImageZoom
            width={350}
            className=" bg-white objet-cover cursor-pointer rounded-[10px]"
            src={el.url}
            zoomSrc={el.url}
          />
          <i
            onClick={() => dispatch(DelTodo(el.id))}
            className="  fa-sharp fa-solid fa-xmark text-[30px] absolute top-[2px] left-[14px]  "
          ></i>
          <i
            style={{
              color: Some ? "red" : "white",
            }}
            onClick={() => ADDdel()}
            className=" i fa-sharp fa-solid fa-heart text-[30px] absolute top-[3px] right-[10px] "
          ></i>
        </div>

        <div className=" flex flex-col ml-[10px] gap-[10px]">
          <h4 className="flex items-center gap-[1px]">
            <sup> $</sup>
            <h3 className="text-[30px]">
              {Math.round(el.price > 500 ? (el.price * 80) / 100 : el.price)}
            </h3>
            <strike className="text-[10px] text-[#99a3ae] font-[100]">
              {el.price > 500 ? `${el.price}$` : null}
            </strike>
            <sup className="text-red-500">{el.price > 500 ? "-20%" : null}</sup>
          </h4>
          <h1 className="text-black font-[600] text-black text-xs font-[200] ">
            {el.name}
          </h1>
          <div className="stars">
            <i
              style={{
                color: el.rating >= 1 ? "yellow" : "",
              }}
              className="fa-sharp-duotone fa-solid fa-star "
            ></i>
            <i
              style={{
                color: el.rating >= 2 ? "yellow" : "",
              }}
              className="fa-sharp-duotone fa-solid fa-star"
            ></i>
            <i
              style={{
                color: el.rating >= 3 ? "yellow" : "",
              }}
              className="fa-sharp-duotone fa-solid fa-star"
            ></i>
            <i
              style={{
                color: el.rating >= 4 ? "yellow" : "",
              }}
              className="fa-sharp-duotone fa-solid fa-star"
            ></i>
            <i
              style={{
                color: el.rating >= 5 ? "yellow" : "",
              }}
              className="fa-sharp-duotone fa-solid fa-star"
            ></i>
          </div>
        </div>
        <div className="flex items-center justify-center ">
          <i className="fa-sharp fa-solid fa-basket-shopping-simple"></i>
          <div className="time flex justify-center">
            <button
              className=" ml-[10px] flex gap-[5px] font-[700] text-white z-[20] bg-blue-700 items-center rounded-[4px] p-[4px] w-[350px] justify-center h-[50px] absolute bottom-[20px] right-[10px]
            "
            >
              <a className="text-[24px]">
                {" "}
                <CiShoppingBasket />
              </a>
              <h3>{Day}</h3>
              <p> {mounth}</p>
            </button>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default ProductCard;
