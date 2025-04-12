import { PiUser, PiPhone } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { deleteContact, editContacts } from "../../redux/contacts/operations";
import ModalEditContact from "../ModalEditContact/ModalEditContact";

import css from "./Contact.module.css";
import { useState } from "react";

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Відкриття модального вікна
  const handleUpdContact = () => {
    setIsModalOpen(true);
  };

  // Закриття модального вікна
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Збереження змін у контакті
  const handleSaveChanges = (updatedContact) => {
    dispatch(editContacts(updatedContact));
  };

  // Видалення контакту
  const handleDelContat = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <>
      <div className={css.contactItemWrapper}>
        <p className={css.contactItemInfo}>
          <PiUser size={24} />
          {contact.name}
        </p>
        <p className={css.contactItemInfo}>
          <PiPhone size={24} />
          {contact.number}
        </p>
      </div>

      <button
        className={css.contactBtnEdit}
        type="button"
        onClick={handleUpdContact}
      >
        Edit
      </button>
      <button
        className={css.contactBtnDelete}
        type="button"
        onClick={handleDelContat}
      >
        Delete
      </button>

      <ModalEditContact
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSaveChanges}
        contact={contact}
      />
    </>
  );
}
