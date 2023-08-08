import React from 'react';
import { nanoid } from 'nanoid';
import css from './Addingsection.module.css';
import AddForm from './AddForm/AddForm';

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
        <AddForm
          name={name}
          number={number}
          inputNamePattern={this.inputNamePattern}
          phoneInputPattern={this.phoneInputPattern}
          onInputChange={this.onInputChange}
          onFormSubmit={this.onFormSubmit}
        />
      </div>
    );
  }
}

export default AddSection;
