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
    <form onSubmit={handleSubmit} className="p-3">
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Ime kontakta
        </label>
        <input
          type="text"
          id="name"
          className="form-control"
          onChange={handleInputChange}
          value={newContact.name}
          required
          placeholder="Pero Perić"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="phone" className="form-label">
          Telefon kontakta
        </label>
        <input
          type="number"
          id="phone"
          className="form-control"
          onChange={handleInputChange}
          value={newContact.phone}
          required
          placeholder="098 111 111"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Dodaj kontakt
      </button>
    </form>
  );
};

export default AddContact;
