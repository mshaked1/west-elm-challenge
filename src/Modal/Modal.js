import React from 'react';
import './Modal.css';

const Modal = ({ quantity, showModal, onClose }) => (
  <div className="modal-background">
    <div className="modal-component">
      Your {quantity} item(s) have been added to the cart. Please continue shopping!
      <button onClick={onClose}>Close</button>
    </div>
  </div>
)

export default Modal;