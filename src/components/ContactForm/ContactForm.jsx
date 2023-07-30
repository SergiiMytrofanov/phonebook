import React, { Component } from 'react';
import styles from './ContactForm.module.css';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      phoneNumber: '',
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { firstName, lastName, phoneNumber } = this.state;
    if (firstName && lastName && phoneNumber) {
      const contact = {
        firstName,
        lastName,
        phoneNumber,
      };
      this.props.onAddContact(contact);
      this.setState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
      });
    }
  };

  render() {
    const { firstName, lastName, phoneNumber } = this.state;

    return (
      <div className={styles.contactForm}>
        <h2>Add Contact</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={this.handleInputChange}
            placeholder="First Name"
            required
          />
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={this.handleInputChange}
            placeholder="Last Name"
            required
          />
          <input
            type="tel"
            name="phoneNumber"
            value={phoneNumber}
            onChange={this.handleInputChange}
            placeholder="+380 000 000 00 00"
            required
          />
          <button type="submit">Add Contact</button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
