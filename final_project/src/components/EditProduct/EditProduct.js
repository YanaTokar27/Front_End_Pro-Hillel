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

  const noErrors = {
    categoryInput: "",
    nameInput: "",
    quantityInput: "",
    priceInput: "",
    descriptionText: "",
  };
  const [errors, setErrors] = useState(noErrors);
  const [errorsText, setErrorsText] = useState(noErrors);

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

    setErrors(noErrors);
    setErrorsText(noErrors);
  }, [show]);

  const validateInput = (value, id, inputType) => {
    if (!value) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [id]: "validation-error",
      }));

      setErrorsText((prevErrorsText) => ({
        ...prevErrorsText,
        [id]: "This field is required",
      }));

      return false;
    }

    if (inputType === "number" && value < 1) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [id]: "validation-error",
      }));

      setErrorsText((prevErrorsText) => ({
        ...prevErrorsText,
        [id]: "Value should be positive number",
      }));

      return false;
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [id]: "",
    }));

    setErrorsText((prevErrorsText) => ({
      ...prevErrorsText,
      [id]: "",
    }));
    return true;
  };

  const validateAll = () => {
    let allValid = true;

    allValid &= validateInput(category, "categoryInput", "text");
    allValid &= validateInput(name, "nameInput", "text");
    allValid &= validateInput(quantity, "quantityInput", "number");
    allValid &= validateInput(price, "priceInput", "number");
    allValid &= validateInput(description, "descriptionText", "text");
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
              className={`Modal-input ${errors.categoryInput}`}
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
                validateInput(e.target.value, "categoryInput", "text");
              }}
            ></input>
            <div className="error-container">{errorsText.categoryInput}</div>
          </div>
          <div>
            Name <br />
            <input
              id="nameInput"
              className={`Modal-input ${errors.nameInput}`}
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                validateInput(e.target.value, "nameInput", "text");
              }}
            ></input>
            <div className="error-container">{errorsText.nameInput}</div>
          </div>
          <div>
            Quantity <br />
            <input
              id="quantityInput"
              type="number"
              className={`Modal-input ${errors.quantityInput}`}
              value={quantity}
              onChange={(e) => {
                setQuantity(e.target.value);
                validateInput(e.target.value, "quantityInput", "number");
              }}
            ></input>
            <div className="error-container">{errorsText.quantityInput}</div>
          </div>
          <div>
            Price <br />
            <input
              id="priceInput"
              type="number"
              className={`Modal-input ${errors.priceInput}`}
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
                validateInput(e.target.value, "priceInput", "number");
              }}
            ></input>
            <div className="error-container">{errorsText.priceInput}</div>
          </div>
          <div>
            Description
            <br />
            <textarea
              id="descriptionText"
              className={`Modal-input ${errors.descriptionText}`}
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
                validateInput(e.target.value, "descriptionText", "text");
              }}
            ></textarea>
            <div className="error-container">{errorsText.descriptionText}</div>
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
