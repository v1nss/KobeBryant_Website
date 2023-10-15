// Get the contact list
const contacts = document.querySelector('ul');
// Create a new contact
const newContact = document.createElement('li');
// Set the contact's name and email address
newContact.innerHTML = `
  <a href="mailto:vincemarc.mr@gmail.com">Robles, Vincent F.</a>
`;
// Add the new contact to the list
contacts.appendChild(newContact);