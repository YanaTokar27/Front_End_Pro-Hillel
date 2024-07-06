import Login from "./pages/Login/Login";
import TodoList from "./pages/TodoList/TodoList";
import ProductPreview from "./pages/ProductPreview/ProductPreview";
import Error from "./pages/Error/Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./privateRoure";

const AppRouter = () => (
  <TodoList />
);

export default AppRouter;
