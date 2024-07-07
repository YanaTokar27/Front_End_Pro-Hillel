import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./EditProduct.css";
import { useState, useEffect } from "react";

function EditProduct({ product, show, handleSave, handleClose }) {
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");

  useEffect(() => {
    setCategory(product.category);
    setName(product.name);
    setQuantity(product.quantity);
    setPrice(product.price);
    setDescription(product.description);
  }, [show]);

  const onSubmit = () => {
    const id = product.id;
    const newProduct = { id, category, name, quantity, price, description };
    handleSave(newProduct);
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Edit product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          Category <br />
          <input
            className="Modal-input"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          ></input>
        </div>
        <div>
          Name <br />
          <input
            className="Modal-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div>
          Quantity <br />
          <input
            className="Modal-input"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          ></input>
        </div>
        <div>
          Price <br />
          <input
            className="Modal-input"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          ></input>
        </div>
        <div>
          Description
          <br />
          <textarea
            className="Modal-input"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={onSubmit}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditProduct;
