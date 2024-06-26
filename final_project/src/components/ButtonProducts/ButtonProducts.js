import "./ButtonProducts.css";

const ButtonProducts = (props) => (
  <button className="button-product" onClick={props.onClick}>
    {" "}
    {props.icon} {props.label}
  </button>
);

export default ButtonProducts;
