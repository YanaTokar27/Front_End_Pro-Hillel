import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { API_URL } from "../../constans";
import LogoWhite from "../../assets/logo_white.svg";
import "./Product.css";
import { FaArrowLeftLong, FaHryvniaSign } from "react-icons/fa6";
import { LuBadgeCheck } from "react-icons/lu";

const Product = () => {
  const [product, setProduct] = useState({});
  const { productId } = useParams();
  const navigate = useNavigate();

  const getProduct = async () => {
    const response = await fetch(`${API_URL}/products/${productId}`);
    const data = await response.json();
    setProduct(data);
    console.log("Products loaded");
  };

  useEffect(() => {
    getProduct();
  }, []);

  const backToPrewiev = () => {
    navigate("/preview");
  };

  return (
    <div>
      <div className="product-logo">
        <div className="product-logo-white product-bottom">
          <img src={LogoWhite} alt="logoWhite" />
        </div>
      </div>
      <div className="product-back-arrow">
        <FaArrowLeftLong size={70} onClick={backToPrewiev} />
        <div className="product-name">{product.name}</div>
      </div>
      <div className="product-info">
        <div className="product-avatar">
          <img
            className="product-avatar-img"
            src={product.avatar}
            alt="product-avatar"
          ></img>
        </div>
        <div>
          {product.quantity > 0 ? (
            <div className="product-in-stock">
              <LuBadgeCheck size={30} style={{ "margin-bottom": "6px" }} /> Є в
              наявності
            </div>
          ) : (
            <div className="product-in-stock">Немає в наявності</div>
          )}
          <div className="product-price">
            {product.price} <FaHryvniaSign size={17} />
          </div>
          <div className="product-quantity">{`Кількість: ${product.quantity}`}</div>
        </div>
      </div>
      <div className="product-description">
        <div className="product-description-name">
          <span>Опис</span>{" "}
          <span className="product-description-name-value">{product.name}</span>
        </div>
        <div className="product-about">{product.description}</div>
      </div>
    </div>
  );
};

export default Product;
