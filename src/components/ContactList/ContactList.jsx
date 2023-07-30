import React, {Component} from 'react';
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
        const fullName = `${contact.firstLastName}`;
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
        <h2>Список Контактів</h2>
        <div className={styles.search}>
          <input
            type="text"
            value={searchName}
            onChange={onSearchNameChange}
            placeholder="Шукати за Ім'ям та Прізвищем"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Ім'я може містити лише літери, апостроф, тире та пробіли. Наприклад, Адріан, Джейкоб Мерсер, Шарль де Батц де Кастельмор д'Артаньян"
          />
          <input
            type="text"
            value={searchPhone}
            onChange={onSearchPhoneChange}
            placeholder="Шукати за номером телефону"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефону повинен бути цифровим і може містити пробіли, тире, круглі дужки та починатися з +."
          />
          <label>
            <input
              type="checkbox"
              checked={searchByPhone}
              onChange={onSearchByPhoneChange}
            />
            Шукати за номером телефону
          </label>
        </div>
        <ul>
          {filteredContacts.map((contact, index) => (
            <li key={index}>
              <span>
                {contact.firstLastName}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{contact.phoneNumber}
              </span>
              <button onClick={() => onDeleteContact(contact.id)}>Видалити</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ContactList;
