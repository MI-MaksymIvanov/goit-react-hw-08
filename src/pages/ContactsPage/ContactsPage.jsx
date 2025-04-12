import ContactForm from "../../components/ContactForm/ContactForm.jsx";
import SearchBox from "../../components/SearchBox/SearchBox.jsx";
import ContactList from "../../components/ContactList/ContactList.jsx";
import Loader from "../../components/Loader/Loader.jsx";
import toast from "react-hot-toast";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations.js";
import {
  selectContacts,
  selectIsError,
  selectIsLoading,
  selectFiltredContacts,
} from "../../redux/contacts/selectors.js";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filteredContacts = useSelector(selectFiltredContacts);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      toast.error("Plz reload page!");
    }
  }, [isError]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {contacts.length === 0 && !isLoading && !isError && (
            <b style={{ textAlign: "center", display: "block", color: "red" }}>
              No contacts.
            </b>
          )}
          {contacts.length > 0 && <SearchBox />}
          {filteredContacts.length === 0 && contacts.length > 0 && (
            <b style={{ textAlign: "center", display: "block", color: "red" }}>
              No result.
            </b>
          )}
          {filteredContacts.length > 0 && <ContactList />}
        </>
      )}
    </>
  );
}
