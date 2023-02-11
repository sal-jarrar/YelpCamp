import React from "react";
import { Button, Modal } from "react-bootstrap";

type ModalProps = {
  show: boolean;
  handleClose: () => void;
};

function DeleteCampModal({ show, handleClose }: ModalProps) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header className="modal-delete-header" closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-delete-body">
        Woohoo, you're reading this text in a modal!
      </Modal.Body>
      <Modal.Footer className="modal-delete-footer">
        <Button variant="outline-warning" onClick={handleClose}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DeleteCampModal;
