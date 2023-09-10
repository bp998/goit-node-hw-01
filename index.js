// const readline = require("readline");

const fs = require("fs");
const path = require("path");
const contactsPath = path.basename("./db/contacts.json");

fs.readFile(contactsPath),
  (err, data) => {
    if (!err) {
      const rawData = data.toString();
      const contacts = JSON.parse(rawData);
      console.log(contacts);
    } else null;
  };

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.on("line", (command) => {
//   console.log(`Twoje polecenie ${command}`);
// });
