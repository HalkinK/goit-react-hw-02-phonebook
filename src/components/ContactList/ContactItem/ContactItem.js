import React from "react";

const ContactItem = ({ contacts, deleteContact }) =>
  contacts.map(({ id, name, number }) => {
    return (
      <li key={id}>
        {name}: {number}
        <button type="button" onClick={() => deleteContact(id)}>
          Delete
        </button>
      </li>
    );
  });

export default ContactItem;
