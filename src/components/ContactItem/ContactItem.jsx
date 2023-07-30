import React from 'react';
import styles from './ContactItem.module.css';

const ContactItem = ({ contact, onDeleteContact }) => {
  const { firstLastName, phoneNumber, id } = contact;

  return (
    <>
      <span className={styles.contactItemData}>
        {firstLastName}:&nbsp; {phoneNumber}
      </span>
      <button className={styles.contactItemButton}onClick={() => onDeleteContact(id)}>Видалити</button>
    </>
  );
};

export default ContactItem;
