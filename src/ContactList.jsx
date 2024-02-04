import React from "react";

const ContactList = ({ contacts, onDeleteContact }) => {
  console.log("drugi objekt", contacts[2]);

  const handleClick = (e) => {
    onDeleteContact(e.target.id);
  };

  return (
    <div>
      <h2>Contact List</h2>
      {contacts.length > 0 && (
        <table style={{ border: "1px solid black" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid black" }}>Name</th>
              <th style={{ border: "1px solid black" }}>Phone number</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact.id}>
                <td style={{ border: "1px solid black" }}>{contact.name}</td>
                <td style={{ border: "1px solid black" }}>{contact.phone}</td>
                <td>
                  <button onClick={handleClick} id={contact.id}>
                    Obriši kontakt
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {!contacts.length && <p>Nema unesenih kontakata</p>}
    </div>
  );
};

export default ContactList;
