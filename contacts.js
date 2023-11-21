const fs = require("fs");
const path = require("path");
require("colors");
const { nanoid } = require("nanoid");

const contactsPath = path.join(__dirname, "db", "contacts.json");

let parsedList = [];

const getData = () => {
  try {
    const data = fs.readFileSync(contactsPath);
    const rawData = data.toString();
    const contacts = JSON.parse(rawData);
    parsedList = [...contacts];
  } catch (err) {
    console.log(err);
  }
};

const setData = () => {
  try {
    const data = JSON.stringify(parsedList);
    fs.writeFileSync(contactsPath, data);
  } catch (err) {
    console.log(err);
  }
};

function listContacts() {
  getData();
  console.table(parsedList);
}

function getContactById(contactId) {
  getData();
  let contact = parsedList.find((contact) => contact.id === contactId);
  if (!contact) {
    console.log(`Contact with id ${contactId} not found`.red);
    return;
  } else {
    console.log(`Id - ${contact.id}`.yellow);
    console.log(`Imie - ${contact.name}`.green);
    console.log(`Email - ${contact.email}`.green);
    console.log(`Telefon - ${contact.phone}`.green);
  }
}

function addContact(name, email, phone) {
  getData();
  let id = nanoid();
  parsedList = [...parsedList, { id: `${id}`, name, email, phone }];
  setData();
  console.log(`Contact ${name} added!`.green);
}

function removeContact(contactId) {
  getData();
  let idInList = parsedList.find((contact) => contact.id === contactId);
  if (!idInList) {
    console.log(`Contact with id ${contactId} not found`.red);
  } else {
    parsedList = parsedList.filter((contact) => contact.id !== contactId);
    setData();
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
