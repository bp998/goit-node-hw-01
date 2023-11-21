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

// fs.readFile(contactsPath, (err, data) => {
//   if (!err) {
//     const rawData = data.toString();
//     const contacts = JSON.parse(rawData);
//     // console.log(contacts);
//     parsedList = [...contacts];
//     // contacts.map((contact) => console.log(contact.name));
//   } else console.log(err);
// });

function listContacts() {
  console.table(parsedList);
}

function getContactById(contactId) {
  // ...twój kod
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
