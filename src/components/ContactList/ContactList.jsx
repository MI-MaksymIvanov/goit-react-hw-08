import Contact from "../Contact/Contact.jsx";

import { useSelector } from "react-redux";
import { selectFiltredContacts } from "../../redux/contacts/contactsSelectors.js";

import css from "./ContactList.module.css";

export default function ContactList() {
  const contacts = useSelector(selectFiltredContacts);

  return (
    <ul className={css.contactList}>
      {contacts.map((contact) => {
        return (
          <li className={css.contactListItem} key={contact.id}>
            <Contact contact={contact} />
          </li>
        );
      })}
    </ul>
  );
}
