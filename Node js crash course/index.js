
// // console.log('Hello from Node.js...'); //* to run file in node js simply put 'node index.js OR node index'

// const log = (arg) => console.log(arg);

// //* To get the person object in this file 
// // const person = require('./person');

// //* ES6 WAY
// // import person from './person'; //! node is currently not supporting the ES6 module therefore we will need babel to compile it.

// // console.log(person);


// // Accessing the person from the 'Person' class.
// const Person = require('./person');

// // Creating the person object
// const john = new Person('John Doe', 30);


// // Calling the greeting method in the person classes.
// john.greeting();

// /* Module wrapper function whenever we access a module it comes wrapped around with several components like, 
// exports, require, module, __filename, __dirname. */

// log(__dirname, __filename);

const Logger = require('./logger');

const logger = new Logger();

logger.on('message', data => console.log('Called listener ', data));

logger.log('Hello World');
