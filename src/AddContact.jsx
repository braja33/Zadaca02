import React, { useState } from "react";

const AddContact = ({ addNewContact }) => {
  const [newContact, setNewContact] = useState({
    name: "",
    phone: "",
    id: "0",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedContact = { ...newContact, id: Date.now().toString() };
    addNewContact(updatedContact);
    console.log("Kontakt s ID", updatedContact);
    setNewContact({ name: "", phone: "", id: "0" });
  };

  const handleInputChange = (e) => {
    setNewContact({ ...newContact, [e.target.id]: e.target.value });
    console.log("Target element", e.target.id);
    console.log("novi kontakt", newContact);
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="newContactName">Ime kontakta</label>
        <input
          type="text"
          id="name"
          onChange={handleInputChange}
          value={newContact.name}
          required
          placeholder="Pero Perić"
        />
      </p>

      <p>
        <label htmlFor="newContactPhone">Telefon kontakta</label>
        <input
          type="number"
          id="phone"
          onChange={handleInputChange}
          value={newContact.phone}
          required
          placeholder="098 111 111"
        />
      </p>
      <button type="submit">Dodaj kontakt</button>
    </form>
  );
};

export default AddContact;
