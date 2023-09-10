const fs = require("fs");
const path = require("path");
const contactsPath = path.join(__dirname, "db", "contacts.json");

fs.readFile(contactsPath, (err, data) => {
  if (!err) {
    const rawData = data.toString();
    const contacts = JSON.parse(rawData);
    console.log(contacts);
  } else console.log(err);
});

module.exports;
