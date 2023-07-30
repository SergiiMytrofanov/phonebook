import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import styles from './App.module.css';

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
    const isDuplicateName = this.isDuplicateName(contact.firstLastName);
    const isDuplicatePhoneNumber = this.isDuplicatePhoneNumber(
      contact.phoneNumber
    );

    if (isDuplicateName) {
      alert(
        'Контакт з таким ім\'ям та прізвищем вже існує в телефонній книзі!'
      );
    } else if (isDuplicatePhoneNumber) {
      alert('Контакт з таким номером телефону вже існує в телефонній книзі!');
    } else {
      this.setState((prevState) => ({
        contacts: [...prevState.contacts, contact],
      }));
    }
  };

  isDuplicateName = (name) => {
    const { contacts } = this.state;
    const lowerCaseName = name.toLowerCase();
    return contacts.some(
      (existingContact) =>
        existingContact.firstLastName.toLowerCase() === lowerCaseName
    );
  };

  isDuplicatePhoneNumber = (phoneNumber) => {
    const { contacts } = this.state;
    return contacts.some(
      (existingContact) =>
        existingContact.phoneNumber.replace(/[/\s\-]/g, '') ===
        phoneNumber.replace(/[/\s\-]/g, '')
    );
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
        <h1>Додати контакт</h1>
        <ContactForm onAddContact={this.handleAddContact} />

        <h2>Список контактів</h2>
        <Filter
          searchName={searchName}
          searchPhone={searchPhone}
          searchByPhone={searchByPhone}
          onSearchNameChange={this.handleSearchNameChange}
          onSearchPhoneChange={this.handleSearchPhoneChange}
          onSearchByPhoneChange={this.handleSearchByPhoneChange}
        />
        <ContactList
          contacts={contacts}
          onDeleteContact={this.handleDeleteContact}
        />
      </div>
    );
  }
}

export default App;
