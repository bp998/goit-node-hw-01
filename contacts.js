const fs = require("fs");
const path = require("path");
require("colors");
const { nanoid } = require("nanoid");

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

function addContact(name, email, phone) {
  let id = nanoid();
  parsedList = [...parsedList, { id: `${id}`, name, email, phone }];
  console.log(`Contact ${name} added!`.green);
}

function removeContact(contactId) {
  let idInList = parsedList.find((contact) => contact.id === contactId);
  if (!idInList) {
    console.log(`Contact with id ${contactId} not found`.red);
  } else {
    parsedList = parsedList.filter((contact) => contact.id !== contactId);
    console.log(`Contact with id ${contactId} deleted`.green);
  }
}

module.exports = {
  contactsPath,
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
