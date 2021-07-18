import React from "react";
import styles from "../ContactItem/ContactItem.module.css";
import PropTypes from "prop-types";

const ContactItem = ({ contacts, deleteContact }) =>
  contacts.map(({ id, name, number }) => {
    return (
      <li key={id}>
        {name}: {number}
        <button
          className={styles.button}
          type="button"
          onClick={() => deleteContact(id)}
        >
          Delete
        </button>
      </li>
    );
  });

ContactItem.defaultProps = {
  name: "",
  number: "",
  id: "",
};
ContactItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
