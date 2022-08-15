import React from "react";
import { Routes, Route } from "react-router-dom";
import { ROUTE } from "../common/utils/constant";
import MainPage from "../pages/Main";

import Todo from "../pages/Todo";

function Router() {
  return (
    <>
      <Routes>
        <Route path={ROUTE.MAIN} element={<MainPage />} />
        <Route path={ROUTE.TODO} element={<Todo />} />
      </Routes>
    </>
  );
}

export default Router;
