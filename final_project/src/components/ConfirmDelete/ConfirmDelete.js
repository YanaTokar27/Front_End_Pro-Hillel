import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ConfirmDelete(props) {
  return (
    <Modal show={props.show} onHide={props.handleClose} centered>
      <Modal.Body>Are you sure you want to delete this product?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={props.handleDelete}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ConfirmDelete;
