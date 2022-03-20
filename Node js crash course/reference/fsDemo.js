// core modules:- file system module.

const fs = require('fs');
const path = require('path');

// Create folder.
// fs.mkdir(path.join(__dirname, '/test'), {}, (err) => {
//   if (err) throw err;
//   console.log('Folder Created')
// })


//  Create and write to file.

// ! writeFile overwrites the prewritten text if it is already present inside the node.

// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World !', error => {

//   if (error) throw error;
//   console.log('File written to...');

//   fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), 'I love Node.js ', error => {

//     if (error) throw error;
//     console.log('File written to...')

//   });

// })

// ! to append the previously written text with the new text use appendFile method of the fs module.



// * READ FILE.
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {

//   if (err) throw err;
//   console.log(data);

// });

// * To rename a file.

fs.rename(path.join(__dirname, '/test', 'hello.txt'),
  path.join(__dirname, '/test', 'node.txt'), error => {

    if (error) throw error;
    console.log('File renamed...');
  })