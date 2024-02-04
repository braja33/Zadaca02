import React from "react";
import { useState } from "react";

import AddContact from "./AddContact";
import ContactList from "./ContactList";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [contacts, setContact] = useState([]);

  const addNewContact = (contact) => {
    setContact([...contacts, contact]);
  };

  const removeContact = (contactId) => {
    let contactToDelete = contacts.find((contact) => contact.id === contactId);
    if (
      window.confirm(
        `Jeste li sigurni da želite obrisati ${contactToDelete.name} iz imenika?`
      )
    )
      setContact(contacts.filter((contact) => contact.id != contactId));
  };

  return (
    <>
      <AddContact addNewContact={addNewContact} />
      <ContactList contacts={contacts} onDeleteContact={removeContact} />
    </>
  );
};

export default App;
