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

  const getProducts = async () => {
    const response = await fetch(`${API_URL}/products`);
    const data = await response.json();
    setProducts(data);
    console.log("Products loaded");
  };

  const updateProduct = async (product) => {
    const response = await fetch(`${API_URL}/products/${product.id}`, {
      method: "PUT",
      body: JSON.stringify(product),
      headers: {
        "Content-Type": "application/json",
      },
    });
    await response.json();
    getProducts();
  };

  const onProductChanged = (product) => {
    updateProduct(product);
  };

  const onProductDelete = async (productId) => {
    const response = await fetch(`${API_URL}/products/${productId}`, {
      method: "DELETE",
    });
    await response.json();
    getProducts();
  };

  useEffect(() => {
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
      <Table
        products={products}
        onProductChanged={onProductChanged}
        onProductDelete={onProductDelete}
      />
    </div>
  );
}

export default Products;
