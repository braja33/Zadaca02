import React from "react";

const ContactList = ({ contacts, onDeleteContact }) => {
  const handleClick = (e) => {
    onDeleteContact(e.target.id);
  };

  return (
    <div className="p-3 border">
      <h2 className="text-primary">Imenik</h2>
      {contacts.length > 0 && (
        <table className="table table-striped">
          <thead className="bg-primary text-white">
            <tr>
              <th>Ime</th>
              <th>Telefonski broj</th>
              <th>Akcije</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact.id}>
                <td>{contact.name}</td>
                <td>{contact.phone}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={handleClick}
                    id={contact.id}
                  >
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
