import React from "react";
import Home from "./components/Home";
import Favorite from "./components/Favorite/Favorite";
import Shop from "./components/Shop/Shop";
import Header from "./components/Header/Header";
import { Route, Router, Routes } from "react-router-dom";
import Admin from "./components/Admin/Admin";

const App = () => {
  const router = [
    {
      id: 1,
      Link: "/",
      element: <Home />,
    },
    {
      id: 2,
      Link: "/favorite",
      element: <Favorite />,
    },
    ,
    {
      id: 3,
      Link: "/shop",
      element: <Shop />,
    },
    {
      id: 4,
      Link: "/admin",
      element: <Admin />,
    },
  ];
  return (
    <>
      <Header />
      <Routes>
        {router.map((el) => (
          <Route path={el.Link} element={el.element} key={el.id} />
        ))}
      </Routes>
    </>
  );
};

export default App;
