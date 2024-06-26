import { useParams } from "react-router-dom";

const Product = () => {
  const { productId } = useParams();

  return <div>Chosen product is: {productId}</div>;
};

export default Product;
