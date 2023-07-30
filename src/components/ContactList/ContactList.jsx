import React, { Component } from 'react';
import styles from './ContactList.module.css';

class ContactList extends Component {
  render() {
    const {
      contacts,
      searchName,
      searchPhone,
      searchByPhone,
      onSearchNameChange,
      onSearchPhoneChange,
      onSearchByPhoneChange,
      onDeleteContact,
    } = this.props;

    const filteredContacts = contacts.filter((contact) => {
      const fullName = `${contact.firstName} ${contact.lastName}`;
      const formattedPhone = contact.phoneNumber.replace(/\s/g, '');
      const formattedSearchPhone = searchPhone.replace(/\s/g, '');

      if (searchByPhone) {
        return formattedPhone.includes(formattedSearchPhone);
      } else {
        return fullName.toLowerCase().includes(searchName.toLowerCase());
      }
    });

    return (
      <div className={styles.contactList}>
        <h2>Contact List</h2>
        <div className={styles.search}>
          <input
            type="text"
            value={searchName}
            onChange={onSearchNameChange}
            placeholder="Search by Name"
          />
          <input
            type="text"
            value={searchPhone}
            onChange={onSearchPhoneChange}
            placeholder="Search by Phone"
          />
          <label>
            <input
              type="checkbox"
              checked={searchByPhone}
              onChange={onSearchByPhoneChange}
            />
            Search by Phone
          </label>
        </div>
        <ul>
          {filteredContacts.map((contact, index) => (
            <li key={index}>
              <span>
                {contact.firstName} {contact.lastName} - {contact.phoneNumber}
              </span>
              <button onClick={() => onDeleteContact(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ContactList;
