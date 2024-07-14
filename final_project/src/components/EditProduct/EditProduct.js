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

  const validateInput = (inputId, errorElementId) => {
    const input = document.getElementById(inputId);
    const errorElement = document.getElementById(errorElementId);

    if (!input.value.trim()) {
      input.classList.add("validation-error");
      errorElement.textContent = "This field is required";

      return false;
    }

    if (input.type === "number" && input.value < 1) {
      input.classList.add("validation-error");
      errorElement.textContent = "Value should be positive number";

      return false;
    }

    input.classList.remove("validation-error");
    errorElement.textContent = "";
    return true;
  };

  const validateAll = () => {
    let allValid = true;
    allValid &= validateInput("categoryInput", "categoryInputError");
    allValid &= validateInput("nameInput", "nameInputError");
    allValid &= validateInput("quantityInput", "quantityInputError");
    allValid &= validateInput("priceInput", "priceInputError");
    allValid &= validateInput("descriptionText", "descriptionTextError");
    return allValid;
  };

  const onSubmit = () => {
    if (validateAll()) {
      const id = product ? product.id : undefined;
      const newProduct = { id, category, name, quantity, price, description };
      handleSave(newProduct);
    }
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
              id="categoryInput"
              className="Modal-input"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
                validateInput("categoryInput", "categoryInputError");
              }}
            ></input>
            <div id="categoryInputError" className="error-container"></div>
          </div>
          <div>
            Name <br />
            <input
              id="nameInput"
              className="Modal-input"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                validateInput("nameInput", "nameInputError");
              }}
            ></input>
            <div id="nameInputError" className="error-container"></div>
          </div>
          <div>
            Quantity <br />
            <input
              id="quantityInput"
              type="number"
              className="Modal-input"
              value={quantity}
              onChange={(e) => {
                setQuantity(e.target.value);
                validateInput("quantityInput", "quantityInputError");
              }}
            ></input>
            <div id="quantityInputError" className="error-container"></div>
          </div>
          <div>
            Price <br />
            <input
              id="priceInput"
              type="number"
              className="Modal-input"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
                validateInput("priceInput", "priceInputError");
              }}
            ></input>
            <div id="priceInputError" className="error-container"></div>
          </div>
          <div>
            Description
            <br />
            <textarea
              id="descriptionText"
              className="Modal-input"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
                validateInput("descriptionText", "descriptionTextError");
              }}
            ></textarea>
            <div id="descriptionTextError" className="error-container"></div>
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
