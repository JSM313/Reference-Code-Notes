const url = require('url');

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

// Get serialized url
console.log(myUrl.href);

console.log(myUrl.href.toString()); // same thing as above

// To get HOST
console.log(myUrl.host); // return mywebsite.com

// To get Hostname
console.log(myUrl.hostname);// returns the same thing but it doesn't include the port number if it is mentioned in the url. That is the difference between host and hostname.

// Path name
console.log(myUrl.pathname); // returns /hello.html

// Serialized Query
console.log(myUrl.search);

// to get search params (params object)
console.log(myUrl.searchParams);

// Add param
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);


// Loop through the params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));

