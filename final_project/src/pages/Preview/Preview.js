import "./Preview.css";
import LogoWhite from "../../assets/logo_white.svg";
import CardProduct from "./components/CardProduct/CardProduct";
import { useState, useEffect } from "react";
import { API_URL } from "../../constans";

const Preview = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch(`${API_URL}/products`);
      const data = await response.json();
      setProducts(data);
      console.log("Products loaded");
    };
    getProducts();
  }, []);

  return (
    <div className="Preview">
      <div className="LogoWhite">
        <img src={LogoWhite} alt="logoGreen" />
      </div>
      <div className="Cards">
        {products.map((product) => (
          <CardProduct product={product} />
        ))}
      </div>
    </div>
  );
};

export default Preview;
