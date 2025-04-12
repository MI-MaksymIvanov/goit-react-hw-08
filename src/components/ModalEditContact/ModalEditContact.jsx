import { useState } from "react";
import css from "./ModalEditContact.module.css";

export default function ModalEditContact({ isOpen, onClose, onSave, contact }) {
  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.number);

  const handleClose = () => {
    onClose();
    setName(contact.name);
    setNumber(contact.number);
  };

  const handleSave = () => {
    onSave({ ...contact, name, number });
    handleClose();
  };

  if (!isOpen) return null;

  return (
    <div className={css.modal}>
      <div className={css.modalContent}>
        <h2>Edit Contact</h2>
        <form>
          <div className={css.modalInputWrapper}>
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className={css.modalInput}
            />
          </div>
          <div className={css.modalInputWrapper}>
            <label htmlFor="number">Phone Number:</label>
            <input
              id="number"
              type="text"
              value={number}
              onChange={(event) => setNumber(event.target.value)}
              className={css.modalInput}
            />
          </div>
        </form>

        <div className={css.modalButtons}>
          <button
            type="button"
            onClick={handleSave}
            className={css.modalBtnSave}
          >
            Save
          </button>
          <button
            type="button"
            onClick={handleClose}
            className={css.modalBtnCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
