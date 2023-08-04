import React from 'react';
import { nanoid } from 'nanoid';
import css from './Addingsection.module.css';

class AddSection extends React.Component {
  state = {
    currentContact: { name: '', id: '', number: '' },
    name: '',
    number: '',
  };
  nameInputPattern =
    "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$";
  phoneInputPattern =
    '+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}';

  inputNameId = nanoid(5);
  inputPhoneId = nanoid(5);

  checkContactRepetition = (contact, presentContacts) => {
    for (let item of presentContacts) {
      if (item.name === contact.name) {
        return true;
      }
    }
    return false;
  };
  showAlert = name => {
    alert(`${name} is already in your contacts`);
  };
  onFormSubmit = event => {
    event.preventDefault();
    const { contacts } = this.props;
    const { currentContact } = this.state;
    if (this.checkContactRepetition(currentContact, contacts)) {
      this.showAlert(currentContact.name);
      return;
    }

    currentContact.id = nanoid(5);

    this.props.addContact(currentContact);

    this.formReset();
  };

  formReset = () => {
    this.setState({ name: '', number: '' });
  };

  onInputChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({
      [name]: value,
      currentContact: { ...this.state.currentContact, [name]: value },
    });
  };
  render() {
    const { name, number } = this.state;
    return (
      <div className={css.section}>
        <form className={css.section__form} onSubmit={this.onFormSubmit}>
          <label htmlFor={this.inputNameId}>Name</label>
          <input
            id={this.inputNameId}
            className={css.section__form__input}
            type="text"
            name="name"
            value={name}
            pattern={this.inputNamePattern}
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder="Enter name here"
            required
            onChange={this.onInputChange}
          />
          <label htmlFor={this.inputPhoneId}>Number</label>
          <input
            id={this.inputPhoneId}
            className={css.section__form__input}
            type="tel"
            name="number"
            value={number}
            pattern={this.phoneInputPattern}
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder="Enter phone number"
            required
            onChange={this.onInputChange}
          />
          <button type="submit" className={css.section__form__button}>
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

export default AddSection;
