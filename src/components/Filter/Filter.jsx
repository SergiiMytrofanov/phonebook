import React from 'react';
import styles from './Filter.module.css';

const Filter = ({ searchName, searchPhone, searchByPhone, onSearchNameChange, onSearchPhoneChange, onSearchByPhoneChange }) => {
  return (
    <div className={styles.filterContainer}>
    <label className={styles.filterCheck}>
        <input
          type="checkbox"
          checked={searchByPhone}
          onChange={onSearchByPhoneChange}
        />
        Пошук за номером телефону
      </label>
      <input className={styles.filterInput}
        type="text"
        value={searchName}
        onChange={onSearchNameChange}
        placeholder="Пошук за ім'ям та прізвищем"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Ім'я може містити лише літери, апостроф, тире та пробіли. Наприклад, Адріан, Джейкоб Мерсер, Шарль де Батц де Кастельмор д'Артаньян"
        hidden={searchByPhone}
      />
      <input className={styles.filterInput}
        type="text"
        value={searchPhone}
        onChange={onSearchPhoneChange}
        placeholder="Пошук за номером телефону"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефону повинен бути цифровим і може містити пробіли, тире, круглі дужки та починатися з +."
        hidden={!searchByPhone}
      />

    </div>
  );
};

export default Filter;
