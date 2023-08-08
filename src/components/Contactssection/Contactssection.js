import React from 'react';
import css from './Contactssection.module.css';
import Filter from './Filter/Filter';
import Contact from './Contact/Contact';

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
        <Filter filter={filter} onFilterChange={onFilterChange} />

        <ul className={css.section__contacts__list}>
          {filteredContacts.map(({ id, number, name }) => {
            return (
              <Contact
                key={id}
                id={id}
                name={name}
                number={number}
                deleteContact={deleteContact}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ContactsSection;
