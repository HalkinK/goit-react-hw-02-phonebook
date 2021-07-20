import React from "react";
import ContactItem from "./ContactItem/ContactItem";
import PropTypes from "prop-types";

const ContactList = ({ contacts, deleteContact }) => (
  <ul>
    <ContactItem contacts={contacts} deleteContact={deleteContact} />
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;

// const ContactList = ({ contacts }) => (
//   <ul>
//     {/* <ContactItem contacts={contacts} /> */}
//     {contacts.map(({ id, name, number }) => (
//       <li key={id}>
//         {name}: {number}
//       </li>
//     ))}
//   </ul>
// );
