import React from "react";

import AddSection from "./Addingsection/Addingsection";
import ContactsSection from "./Contactssection/Contactssection";

class App extends React.Component {
  state = {
  contacts: [],
  name: '',
  number: '',
  filter:''
}
  addContact = contact => {
  this.setState(prevState => {
    return {
      contacts: [...prevState.contacts, contact]
    };
  });
  }
  deleteContact = (id) => {
    const { contacts } = this.state;
    const updatedContacts = contacts.filter(contact => contact.id !== id)
    this.setState({ contacts: updatedContacts });
  }
  onFilterChange = (event) => {
this.setState({filter: event.currentTarget.value})
  }
  
  render() {
    
    const {name, contacts, filter} = this.state
    return (
      
    <>
        <h1>PhoneBook</h1>
        <AddSection addContact={this.addContact} currentName={name} contacts={contacts}></AddSection>
        <ContactsSection contacts={contacts}
          filter={filter}
          onFilterChange={this.onFilterChange}
        deleteContact={this.deleteContact}
        ></ContactsSection>
        
    </>
    )
  }
}

export default App
