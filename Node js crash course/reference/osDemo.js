// This module gives us the information about the OS

const os = require('os');

// Platform
console.log(os.platform()); // return win32 for windows

// CPU Architecture.
console.log(os.arch()); // returns x64 

// CPU Core Info
console.log(os.cpus()); // returns an object with information on every core of the cpu.


// Free memory info
console.log(os.freemem());

// Total memory info
console.log(os.totalmem());

// Access to home directory
console.log(os.homedir());

// UPtime of the OS
console.log(os.uptime());