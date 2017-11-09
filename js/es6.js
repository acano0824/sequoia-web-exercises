/*
 * Complete the TODO items below
 */
const users = [
  {
    id: 1,
    name: 'zach',
    email: 'zach@codeup.com',
    languages: ['javascript', 'bash']
  },
  {
    id: 2,
    name: 'ryan',
    email: 'ryan@codeup.com',
    languages: ['clojure', 'javascript']
  },
  {
    id: 3,
    name: 'luis',
    email: 'luis@codeup.com',
    languages: ['java', 'scala', 'php']
  },
  {
    id: 4,
    name: 'fernando',
    email: 'fernando@codeup.com',
    languages: ['java', 'php', 'sql']
  },
  {
    id: 5,
    name: 'justin',
    email: 'justin@codeup.com',
    languages: ['html', 'css', 'javascript', 'php']
  }
];






//========== ES6 EXERCISES ==========


// TODO: fill in your name and email and add some programming languages you know
// to the languages array
// TODO: replace the `var` keyword with `const`, then try to reassign a variable
// declared as `const`
const name = `ashley`;
const email = `acano6835@gmail.com`;
const languages = [`html`, `css`, `javascript`];

// TODO: rewrite the object literal using object property shorthand
// users.push({
//   name: name,
//   email: email,
//   languages: languages
// });

users.push({
    name,
    email,
    languages
});

// TODO: replace `var` with `let` in the following variable declarations
let emails = [];
let names = [];

// TODO: rewrite the following using arrow functions
users.forEach((user) => emails.push(user.email));

users.forEach((user) => names.push(user.name));

// TODO: replace `var` with `let` in the following declaration
let developers = [];

// users.forEach(function(user) {
//   // TODO: rewrite the code below to use object destructuring assignment
//   //       note that you can also use destructuring assignment in the function
//   //       parameter definition
//   const name = user.name;
//   const email = user.email;
//   const languages = user.languages;
//
//   // TODO: rewrite the assignment below to use template strings
//   developers.push(name + '\'s email is ' + email + name + ' knows ' + languages.join(', '));
// });

users.forEach(function(user) {

  let {name, email, languages} = user;

  developers.push(`${name}'s email is ${email}. ${name} knows ${languages.join(', ')}`);

});

  // console.log(developers);


// TODO: Use `let` for the following variable
let list = '<ul>';

// // TODO: rewrite the following loop to use a for..of loop
// developers.forEach(function (developer) {
//
//   // TODO: rewrite the assignment below to use template strings
//   list += '<li>' + developer + '</li>';
// });
// list += '</ul>';



for (let developer of developers) {

  list += `<li> ${developer} </li>`;

}
list+= `</ul>`;

  $('.developers').html(list);






// =========== MAPS, REDUCE, FILTER EXERCISE =========

const threeLanguages = users.filter((user) => {

  return (user.languages.length >= 3);

});

  // console.log(threeLanguages);



const emailsArray = users.map((user) => {

  return (user.email);

});

  // console.log(emailsArray);



  const userReduction = users.reduce((accumulator, user) => {

    accumulator[user.id] = user.name;
      return accumulator;

  }, {});

    // console.log(userReduction);






  // ============ MAP FILTER REDUCE BONUSES ============



{
    "use strict";

    const fruits = ["cantaloupe", "orange", "date", "elderberry", "ugli fruit", "pineapple"];

    const customers = [
        {
            name: "Fred",
            age: 58,
            occupation: "Police Officer",
            noOfPurchases: 4
        },
        {
            name: "Samantha",
            age: 54,
            occupation: "Teacher",
            noOfPurchases: 18
        },
        {
            name: "Charles",
            age: 38,
            occupation: "Librarian",
            noOfPurchases: 9
        }
    ];


    // PROBLEM 1 - create an array of the first letters of each fruit



    // PROBLEM 2 - create array of user objects based on the customers array
    // of objects (each user object should just have name and age properties)


    // PROBLEM 3 - create an array of civil servant customers (teachers and police officers)
    // containing the same properties as the objects on the customers objects



    // PROBLEM 4 - determine the average age of customers





//            PROBLEM 1 HINT - use .map()

    const firstLetters = fruits.map((fruit) => {

  return fruit.charAt(0);

});

  // console.log(firstLetters);


//            PROBLEM 2 HINT - use .map()



  const custArray = customers.map((customer) => {

    customer = `Name: ${customer.name} Age: ${customer.age}`;

    return customer;

  });


  console.log(custArray);



//            PROBLEM 3 HINT - use .filter()


















//            PROBLEM 4 HINT - use .reduce()









}


