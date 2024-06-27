import "./CardProduct.css";
import Lenovo from "./../../../../assets/lenovo-laptop.png";
import { GiShoppingCart } from "react-icons/gi";
import { FaHryvniaSign } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function CardProduct({ product }) {
  const navigate = useNavigate();

  const navigateToProduct = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="CardProduct" onClick={navigateToProduct}>
      <div>
        <img src={Lenovo} alt="logoGreen" />
      </div>
      <div key={product.id}>
        <p className="Title">{product.name}</p>
        <div className="Wrapper">
          <p className="Price">
            {product.price} <FaHryvniaSign />
          </p>
          <p className="Quantity">Кількість: {product.quantity}</p>
        </div>
        <p className="ReadyToShip">
          {" "}
          <GiShoppingCart className="Cart" /> Готовий до відправки
        </p>
      </div>
    </div>
  );
}

export default CardProduct;
