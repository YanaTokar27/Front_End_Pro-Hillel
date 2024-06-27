import Login from "./pages/Login/Login";
import Preview from "./pages/Preview/Preview";
import Products from "./pages/Products/Products";
import Error from "./pages/Error/Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./privateRoute";
import Product from "./pages/Product/Product";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route element={<PrivateRoute />}>
          <Route path="/preview" element={<Preview />} />
          <Route path="/products" element={<Products />} />
        </Route>

        <Route path="/product/:productId" element={<Product />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
