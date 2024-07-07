import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ConfirmDelete = ({ show, handleClose, handleDelete }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Body>Are you sure you want to delete this product?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleDelete}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmDelete;
