const fs = require("fs");
const path = require("path");
require("colors");
const contactsPath = path.join(__dirname, "db", "contacts.json");

fs.readFile(contactsPath, (err, data) => {
  if (!err) {
    const rawData = data.toString();
    const contacts = JSON.parse(rawData);
    console.log(contacts);
    // contacts.map((contact) => console.log(contact.name));
  } else console.log(err);
});

module.exports;
