import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import Login from "./pages/Login/Login";
// import Products from "./pages/Products/Products";
// import Preview from './pages/Preview/Preview';
import AppRouter from "./router";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppRouter />
    {/* <Login /> */}
    {/* <Products /> */}
    {/* <Preview /> */}
  </React.StrictMode>
);
