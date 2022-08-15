import React from "react";
import { Routes, Route } from "react-router-dom";
import { ROUTE } from "../common/utils/constant";
import Main from "../pages/Main";
import Todo from "../pages/Todo";

function Router() {
  return (
    <>
      <Routes>
        <Route path={ROUTE.MAIN} element={<Main />} />
        <Route path={ROUTE.TODO} element={<Todo />} />
      </Routes>
    </>
  );
}

export default Router;
