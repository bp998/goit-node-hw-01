## Simple node.js app to watch and moderate small contacts list in .json extension

### Options:
```
  -h, --help           display help for command
  -a, --action <type>  choose action
  -i, --id <type>      user id
  -n, --name <type>    user name
  -e, --email <type>   user email
  -p, --phone <type>   user phone
```

 ### examples:
  Getting contacts list
```
node index.js --action list
```
  Receiving contact by id
```
node index.js --action get --id 05olLMgyVQdWRwgKfg5J6
```
  Adding contact
```
node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22
```
  Removing contact
```
node index.js --action remove --id qdggE76Jtbfd9eWJHrssH
```
