const companies = [
  { name: "Company One", category: "finance", start: 1981, end: 2003 },

  { name: "Company Two", category: "retail", start: 1992, end: 2008 },

  { name: "Company Three", category: "auto", start: 1999, end: 2007 },

  { name: "Company Four", category: "retail", start: 1981, end: 2003 },

  { name: "Company Five", category: "finance", start: 2009, end: 2014 },

  { name: "Company Six", category: "finance", start: 1987, end: 2010 },

  { name: "Company Seven", category: "finance", start: 1986, end: 1996 },

  { name: "Company Eight", category: "finance", start: 2011, end: 2016 },

  { name: "Company Nine", category: "retail", start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

/**
 * forEach
 * filter();
 * map();
 * sort();
 * reduce();
 */

/*
* For Loop
for (let i = 0; i < companies.length; i++) {
  console.log(companies[i]); // logs the whole data of the companies.
}
*/

/* 
* forEach Loop => we can also pass (company, index , array) in parameters of the forEach Loop.;

companies.forEach((company) => {
  console.log(company);
});
*/

/*
 * filter()

! To find the ages above 21 in the ages array.
* 1. => Using a basic for Loop...

let canDrink = [];
for (let i = 0; i < ages.length; i++) {
  if (ages[i] >= 21) {
    canDrink.push(ages[i]);
  }
}

console.log(canDrink);

* ----------------------------------------

* 2.) Using Filter Method...

const canDrink = ages.filter((age) => age >= 21);

console.log(canDrink);



* --------------------------------------
* * Filtering the retail companies

const retailCompanies = companies.filter(
  (company) => company.category === "retail"
);

console.log(retailCompanies);

*--------------------------------------------

* Get all companies which started in 80's

const startDate = companies.filter(
  (company) => company.start >= 1980 && company.start <= 1990
);

console.log(startDate);

* Companies which have category of retail and the ending year is less than 2000.



const lasted10Years = companies.filter(
  (company) => company.end - company.start >= 10
);

console.log(lasted10Years);
*/

//* -----------------------------------------------
/*
 *MAPS :- helps in creating a new array of any kind of data...

 * Create array of company names...
 

const companyNames = companies.map((company) => company.name);

console.log(companyNames);

* -----------------------------------------
* Returns company name along with start and end year...


const testMap = companies.map(
  (company) => `${company.name} :  ${company.start} to ${company.end}`
);

console.log(testMap);


* Printing the square root of the ages and multiplying it by 2...


const ageMap = ages.map((age) => Math.sqrt(age)).map((age) => age * 2);

console.log(ageMap);

*/

/*
 * Sort function:-

  * By default the sort function sorts values as strings..

  Takes 2 arguments and compares them on a basis of a certain condition...

  * Sorting by the company name...

 

const sortedCompanies = companies.sort((company1, company2) => {
  if (company1.start > company2.start) {
    return 1;
  } else {
    return -1;
  }
});

console.log(sortedCompanies);


* Allternate Way...

const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));

console.log(sortedCompanies);

 const numbers = [22, 12, 421, 43, 89];

 console.log(numbers.sort());
 console.log(numbers.sort((a, b) => a - b));


* Sorting ages in ascending order...
const sortAgesAsc = ages.sort((a, b) => a - b);
console.log(sortAgesAsc);

* In descending order...
const sortAgesDesc = ages.sort((a, b) => b - a);
console.log(sortAgesDesc);

*/

/*
 * Reduce function...

* By using ordinary for loop...
let ageSum = 0;
for (let i = 0; i < ages.length; i++) {
  ageSum += ages[i];
}

console.log(ageSum);

* By using reduce function...

* total => is the variable we want to reduce the array to its final product...

* age => is the element present in the array...

* we can also pass index 

* and the entire array as well...
 
const ageSum = ages.reduce((total, age) => total + age, 0);

console.log(ageSum);


*--------------------------------------------------

*Getting the total years of the companies...

const totalYears = companies.reduce(
  (total, company) => total + (company.end - company.start),
  0
);

console.log(totalYears);
*/

/* Combine all methods
 

const combined = ages
  .map((age) => age * 2)
  .filter((age) => age >= 40)
  .sort((a, b) => a - b)
  .reduce((total, age) => total + age, 0);

console.log(combined);
*/

// * Creating a custom array using map function,  in which company displays its name along with its tenure...
const customCompanyTable = companies.map(
  (company) => `${company.name} : Tenure: ${company.end - company.start} years`
);

console.log(customCompanyTable);
