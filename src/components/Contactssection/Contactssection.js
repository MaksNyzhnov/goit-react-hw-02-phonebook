import React from 'react';
import css from './Contactssection.module.css';

class ContactsSection extends React.Component {
  getFilteredContacts = () => {
    const { contacts, filter } = this.props;

    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(normalizedFilter);
    });
  };

  render() {
    const filteredContacts = this.getFilteredContacts();
    const { filter, onFilterChange, deleteContact } = this.props;
    return (
      <div className={css.section}>
        <h2>Contacts</h2>
        <p>Find contact by name</p>
        <input
          className={css.section__input}
          type="text"
          placeholder="Enter name here"
          value={filter}
          onChange={onFilterChange}
        ></input>
        <ul className={css.section__contacts__list}>
          {filteredContacts.map(({ id, number, name }) => {
            return (
              <li key={id} className={css.contact_name}>
                <div className={css.contacts__list__item__content}>
                  <span>
                    {name}: {number}
                  </span>
                  <button
                    type="button"
                    className={css.delete_btn}
                    onClick={() => deleteContact(id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ContactsSection;
