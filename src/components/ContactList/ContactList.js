import React from "react";
import ContactItem from "./ContactItem/ContactItem";

const ContactList = ({ contacts, deleteContact }) => (
  <ul>
    <ContactItem contacts={contacts} deleteContact={deleteContact} />
  </ul>
);

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
