import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import TodoList from "./pages/TodoList/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";
import AppRouter from "./router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
