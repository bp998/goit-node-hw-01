const readline = require("readline");
const fs = require("fs");
const path = require("path");
const { program } = require("commander");
const {
  contactsPath,
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts.js");
require("colors");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      listContacts();
      rl.close();
      break;

    case "get":
      getContactById(id);
      rl.close();
      break;

    case "add":
      addContact(name, email, phone);
      rl.close();
      break;

    case "remove":
      removeContact(id);
      rl.close();
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
      rl.close();
  }
}

invokeAction(argv);
