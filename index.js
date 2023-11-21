const readline = require("readline");
const fs = require("fs");
const path = require("path");
const { contactsPath } = require("./contacts.js");
require("colors");

// const contactsPath = path.join(__dirname, "db", "contacts.json");

// fs.readFile(contactsPath, (err, data) => {
//   if (!err) {
//     const rawData = data.toString();
//     const contacts = JSON.parse(rawData);
//     // console.log(contacts);
//     // contacts.map((contact) => console.log(contact.name));
//   } else console.log(err);
// });

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// rl.question("Wprwoadz polecenie\n".yellow, (command) => {
//   console.log(`Twoje polecenie ${command}`);
// });
