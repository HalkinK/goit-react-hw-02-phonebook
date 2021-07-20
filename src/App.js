import React from "react";
import shortid from "shortid";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";

class App extends React.Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  onFormSubmit = ({ name, number }) => {
    const contact = { id: shortid.generate(), name, number };
    const { contacts } = this.state;

    const existContactName = contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );
    const existContactNumber = contacts.find(
      (contact) => contact.number.toLowerCase() === number.toLowerCase()
    );

    const existContact =
      (existContactName && `${name}`) || (existContactNumber && `${number}`);

    existContactName || existContactNumber
      ? alert(`${existContact} is already in contacts`)
      : this.setState(({ contacts }) => ({
          contacts: [contact, ...contacts],
        }));
  };

  onDeleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalzedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalzedFilter)
    );
  };

  render() {
    const visibleContacts = this.getVisibleContacts();

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.onFormSubmit} />
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <h2>Contacts</h2>
        <ContactList
          contacts={visibleContacts}
          deleteContact={this.onDeleteContact}
        />
      </div>
    );
  }
}

export default App;
