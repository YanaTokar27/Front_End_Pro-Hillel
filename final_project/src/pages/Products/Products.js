import React, { useState, useEffect } from "react";
import "./Products.css";
import Table from "../../components/Table/Table";
import LogoWhite from "../../assets/logo_white.svg";
import ButtonProducts from "../../components/ButtonProducts/ButtonProducts";
import { FaRegUser } from "react-icons/fa6";
import { GoPlus } from "react-icons/go";
import { API_URL } from "../../constans";
import { useNavigate } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const navigateToPreview = () => {
    navigate("/preview");
  };

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
    <div className="Products">
      <div className="LogoWhite">
        <img src={LogoWhite} alt="logoGreen" />
      </div>
      <div className="Buttons">
        <ButtonProducts
          onClick={navigateToPreview}
          icon={<FaRegUser className="img user" />}
          label="Preview"
        />
        <ButtonProducts
          icon={<GoPlus className="img plus" />}
          label="Add product"
        />
      </div>
      <h2 className="ProductsTitle">Products</h2>
      <Table products={products} />
    </div>
  );
}

export default Products;
