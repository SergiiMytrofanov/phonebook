import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import styles from './ContactForm.module.css';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstLastName: '',
      phoneNumber: '',
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { firstLastName, phoneNumber } = this.state;
    if (firstLastName && phoneNumber) {
      const contact = {
        id: nanoid(),
        firstLastName,
        phoneNumber,
      };
      this.props.onAddContact(contact);
      this.setState({
        firstLastName: '',
        phoneNumber: '',
      });
    }
  };

  render() {
    const { firstLastName, phoneNumber } = this.state;
    return (
      <div className={styles.contactFormContainer}>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="firstLastName"
            value={firstLastName}
            onChange={this.handleInputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Ім'я може містити лише літери, апостроф, тире та пробіли. Наприклад, Адріан, Джейкоб Мерсер, Шарль де Батц де Кастельмор д'Артаньян"
            placeholder="Ім'я та Прізвище"
            required
          />
          <input
            type="tel"
            name="phoneNumber"
            value={phoneNumber}
            onChange={this.handleInputChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефону повинен бути цифровим і може містити пробіли, тире, круглі дужки та починатися з +."
            placeholder="+000 000 000 00 00"
            required
          />
          <button className={styles.submitButton} type="submit">
            Додати контакт
          </button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
