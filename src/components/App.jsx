import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import styles from './App.module.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      searchName: '',
      searchPhone: '',
      searchByPhone: false,
    };
  }

  handleAddContact = (contact) => {
    const { contacts } = this.state;
    const isDuplicate = contacts.some(
      (existingContact) =>
        existingContact.firstLastName.toLowerCase() ===
        contact.firstLastName.toLowerCase()
    );

    if (isDuplicate) {
      alert('Такий контакт вже існує в телефонній книзі!');
    } else {
      this.setState((prevState) => ({
        contacts: [...prevState.contacts, contact],
      }));
    }
  };

  handleSearchNameChange = (event) => {
    this.setState({ searchName: event.target.value });
  };

  handleSearchPhoneChange = (event) => {
    this.setState({ searchPhone: event.target.value });
  };

  handleSearchByPhoneChange = (event) => {
    this.setState({ searchByPhone: event.target.checked });
  };

  handleDeleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  render() {
    const { contacts, searchName, searchPhone, searchByPhone } = this.state;

    return (
      <div className={styles.app}>
        <ContactForm onAddContact={this.handleAddContact} />
        <ContactList
          contacts={contacts}
          searchName={searchName}
          searchPhone={searchPhone}
          searchByPhone={searchByPhone}
          onSearchNameChange={this.handleSearchNameChange}
          onSearchPhoneChange={this.handleSearchPhoneChange}
          onSearchByPhoneChange={this.handleSearchByPhoneChange}
          onDeleteContact={this.handleDeleteContact}
        />
      </div>
    );
  }
}

export default App;
