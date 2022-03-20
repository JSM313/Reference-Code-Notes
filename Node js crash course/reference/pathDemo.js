// Core modules :- Path
const path = require('path');

// Basename:- gets the base file name.
console.log(path.basename(__filename));

//* If we simply log __filename it gives us the entire filename along with its path but if we wrap around this with path.basename then we will only get the base name of the file which will be pathDemo.js .

// Directory name
console.log(path.dirname(__filename)); // gives the name of the directory.

// File extension
console.log(path.extname(__filename));

// Create path objects.
console.log(path.parse(__filename)); // segregate the path into objects.

console.log(path.parse(__filename).base);

// concatenate paths.
// ../test/hello.html --> example path

// To join 2 paths we will use .join 
console.log(path.join(__dirname, 'test', 'hello.html'));
// name of the directory, name of the test name of the file. .join method functionality.

