import Login from "./pages/Login/Login";
import TodoList from "./pages/TodoList/TodoList";
import ProductPreview from "./pages/ProductPreview/ProductPreview";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const AppRouter = () => {
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/todo-list" element={<TodoList />} />
      <Route path="/product-preview" element={<ProductPreview />} />
    </Routes>
  </BrowserRouter>;
};

export default AppRouter;
