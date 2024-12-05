import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: JSON.parse(localStorage.getItem("product")) || [],
  favorite: JSON.parse(localStorage.getItem("favorite")) || [],
};
export const SliceTodo = createSlice({
  name: "NUR",
  initialState,
  reducers: {
    ADD_TODO(state, action) {
      let res = (state.product = [...state.product, action.payload]);
      localStorage.setItem("product", JSON.stringify(res));
    },
    DelTodo(state, action) {
      let del = (state.product = state.product.filter(
        (el) => el.id !== action.payload
      ));
      localStorage.setItem("product", JSON.stringify(del));
    },
    AddFavorite(state, action) {
      let add = (state.favorite = [...state.favorite, action.payload]);
      localStorage.setItem("favorite", JSON.stringify(add));
    },
    DelFav(state, action) {
      let delFav = (state.favorite = state.favorite.filter(
        (el) => el.id !== action.payload
      ));
      localStorage.setItem("favorite", JSON.stringify(delFav));
    },
  },
});
export const { ADD_TODO, DelTodo, AddFavorite, DelFav } = SliceTodo.actions;
export default SliceTodo.reducer;
