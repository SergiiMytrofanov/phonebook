import React, { Component } from 'react';
import ContactItem from '../ContactItem/ContactItem';
import styles from './ContactList.module.css';

class ContactList extends Component {
  render() {
    const { contacts, onDeleteContact } = this.props;

    return (
      <ol className={styles.contactList}>
        {contacts.map((contact) => (
          <li className={styles.contactItem} key={contact.id}>
            <ContactItem
              contact={contact}
              onDeleteContact={onDeleteContact}
            />
          </li>
        ))}
      </ol>
    );
  }
}

export default ContactList;
