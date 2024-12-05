import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TODO } from "../../redux/reducer/TodoSlice";

const AdminCard = () => {
  const { product } = useSelector((s) => s.todo);
  const dispatch = useDispatch();
  const [Name, setName] = useState("");
  const [TodoPrice, SetTodoPrice] = useState("");
  const [TodoUrl, SetTodoUrl] = useState("");
  const Product_Todo = () => {
    if (
      Name.trim() === "" ||
      TodoPrice.trim() === "" ||
      TodoUrl.trim() === ""
    ) {
      alert(404);
    } else {
      const NewTodo = {
        id: product.length ? product[product.length - 1].id + 1 : 1,
        name: Name,
        price: TodoPrice,
        url: TodoUrl,
        rating: Math.floor(Math.random() * 5),
      };
      setName("");
      SetTodoPrice("");
      SetTodoUrl("");
      return dispatch(ADD_TODO(NewTodo));
    }
  };
  console.log(product);
  return (
    <div>
      <div className="container">
        <div className="flex items-center justify-center flex-col  w-full gap-[50px]">
          <div className="">
            <input
              value={Name}
              onChange={(e) => setName(e.target.value)}
              className="border-b-[2px] border-[#0000005b] border-solid outline-none p-[10px] bg-transparent  w-[500px] text-black p-4 font-[100]"
              type="text"
              placeholder="   Product Name"
            />
          </div>
          <div className="">
            <input
              value={TodoUrl}
              onChange={(e) => SetTodoUrl(e.target.value)}
              className="border-b-[2px] border-[#0000005b] border-solid outline-none p-[10px] bg-transparent  w-[500px] text-black p-4 font-[100]"
              type="text"
              placeholder="  Product URL.."
            />
          </div>
          <div className="">
            <div className="">
              <input
                value={TodoPrice}
                onChange={(e) => SetTodoPrice(e.target.value)}
                className="border-b-[2px] border-[#0000005b] border-solid outline-none p-[10px] bg-transparent  w-[500px] text-black p-4 font-[100]"
                type="text"
                placeholder="Product Price"
              />
            </div>
          </div>
          <button
            onClick={() => Product_Todo()}
            className="p-[10px] bg-transparent text-xl font-[500]"
          >
            SAVE
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminCard;
