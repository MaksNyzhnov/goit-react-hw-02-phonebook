import { nanoid } from 'nanoid';
import css from './AddForm.module.css';

const inputNameId = nanoid(5);
const inputPhoneId = nanoid(5);
const AddForm = ({
  name,
  number,
  inputNamePattern,
  onInputChange,
  phoneInputPattern,
  onFormSubmit,
}) => {
  return (
    <form className={css.section__form} onSubmit={onFormSubmit}>
      <label htmlFor={inputNameId}>Name</label>
      <input
        id={inputNameId}
        className={css.section__form__input}
        type="text"
        name="name"
        value={name}
        pattern={inputNamePattern}
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        placeholder="Enter name here"
        required
        onChange={onInputChange}
      />
      <label htmlFor={inputPhoneId}>Number</label>
      <input
        id={inputPhoneId}
        className={css.section__form__input}
        type="tel"
        name="number"
        value={number}
        pattern={phoneInputPattern}
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        placeholder="Enter phone number"
        required
        onChange={onInputChange}
      />
      <button type="submit" className={css.section__form__button}>
        Add contact
      </button>
    </form>
  );
};

export default AddForm;
