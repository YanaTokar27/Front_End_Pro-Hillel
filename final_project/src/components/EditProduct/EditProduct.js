import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./EditProduct.css";
import { useState, useEffect } from "react";

function AddEditProduct({ product, show, handleSave, handleClose }) {
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(null);
  const [price, setPrice] = useState(null);
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (product) {
      const { category, name, quantity, price, description } = product;
      setCategory(category);
      setName(name);
      setQuantity(quantity);
      setPrice(price);
      setDescription(description);
    } else {
      setCategory("");
      setName("");
      setQuantity(null);
      setPrice(null);
      setDescription("");
    }
  }, [show]);

  const onSubmit = () => {
    const id = product ? product.id : undefined;
    const newProduct = { id, category, name, quantity, price, description };
    handleSave(newProduct);
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{product ? "Edit product" : "Add product"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
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
              type="number"
              className="Modal-input"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            ></input>
          </div>
          <div>
            Price <br />
            <input
              type="number"
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
        </form>
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

export default AddEditProduct;
