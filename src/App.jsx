import React from "react";
import { useState } from "react";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

const App = () => {
  const [contacts, setContact] = useState([]);

  const addNewContact = (contact) => {
    setContact([...contacts, contact]);
  };

  const removeContact = (contactId) => {
    setContact(contacts.filter((contact) => contact.id != contactId));
  };

  return (
    <>
      <AddContact addNewContact={addNewContact} />
      <ContactList contacts={contacts} />
    </>
  );
};

export default App;
