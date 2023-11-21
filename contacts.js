const fs = require("fs");
const path = require("path");
require("colors");
const contactsPath = path.join(__dirname, "db", "contacts.json");

let parsedList = [];

try {
  const data = fs.readFileSync(contactsPath);
  const rawData = data.toString();
  const contacts = JSON.parse(rawData);
  parsedList = [...contacts];
} catch (err) {
  console.log(err);
}

function listContacts() {
  console.table(parsedList);
}

function getContactById(contactId) {
  let contact = parsedList.find((contact) => contact.id === contactId);
  if (!contact) {
    console.log(`Contact with id ${contactId} not found`.red);
    return;
  } else {
    console.table(contact);
  }
}

function removeContact(contactId) {
  // ...twój kod
}

function addContact(name, email, phone) {
  // ...twój kod
}

module.exports = {
  contactsPath,
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
