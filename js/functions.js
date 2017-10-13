(function() {


    "use strict";

    /**
     * TODO:
     * Create a function called 'sayHello' that takes a parameter 'name'.
     * When called, the function should return a message that says hello to the passed in name.
     *
     * Example
     *  > sayHello("codeup") // returns "Hello, codeup!"
     */


    function sayHello(name) {
        return "Hello, " + name + "!";
    }

    // console.log(sayHello("codeup"));


    /**
     * TODO:
     * Call the function 'sayHello' and pass your name as a string literal argument.
     * Store the result of the function call in a variable named 'helloMessage'.
     *
     * console.log 'helloMessage' to check your work
     */


    var helloMessage = sayHello("ashley");

    // console.log(helloMessage);

    /**
     * TODO:
     * Store your name as a string in a variable named 'myName', and pass that
     * variable to the 'sayHello' function. You should see the same output in the
     * console.
     */

    var myName = "ashley"

    // console.log(sayHello(myName));


// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
    var random = Math.floor((Math.random() * 3) + 1);

    /**
     * TODO:
     * Create a function called 'isTwo' that takes a number as a parameter.
     * The function should return a boolean value based on whether or not the passed
     * number is the number 2.
     *
     * Example
     *  > isTwo(1) // returns false
     *  > isTwo(2) // returns true
     *  > isTwo(3) // returns false
     *
     * Call the function 'isTwo' passing the variable 'random' as a argument.
     *
     * console.log *outside of the function* to check your work (you should see a
     * different result everytime you refresh the page if you are using the random
     * number)
     */


    function isTwo(number) {
        return (number === 2);

    }

    var random = Math.floor((Math.random() * 3) + 1);

    // console.log(isTwo(random));


    /**
     * TODO:
     * Create a function named 'calculateTip' to calculate a tip on a bill at a
     * restaurant. The function should accept a tip percentage and the total of the
     * bill, and return the amount to tip
     *
     * Example:
     * > calculateTip(0.20, 20) // returns 4
     */


// function calculateTip(percent, total){
//     var result = percent * total;
//     return result;
// }
//
//
// console.log(calculateTip);

    /**
     * TODO:
     * Use prompt and alert in combination with your calculateTip function to
     * prompt the user for the bill total and a percentage they would like to tip,
     * then display the dollar amount they should tip
     */


    // var total = prompt('How much was your bill?');
    // console.log('The user entered: ' + total);
    //
    // var percent = prompt('What percentage would you like to tip?');
    // console.log('The user entered: ' + percent);
    //
    // function calculateTip(percent, total) {
    //     var result = percent * total;
    //     return result;
    // }
    //
    // var calculateTip = calculateTip(total, percent);
    //
    // alert("Great, you can tip $" + calculateTip);


//Write a function called `identity(input)` that takes in an argument called
// input and returns that input.

function identity(input) {
    return input;
    }

    var name = "ana";

console.log(name);

//Write a function called `getRandomNumber(min, max)` that returns a random number
// between min and max values sent to that funciton call.






//Write a function called `first(input)` that returns the first character in the provided string.





//Write a fuction called `last(input)` that returns the last character of a string







// Write a function called `rest(input)` that returns everything but the first character of a string.






// Write a function called `reverse(input)` that takes a string and returns it reversed.







//Write a function called `isNumeric(input)` that takes an input and
// returns a boolean if the input is numeric.








// Write a function called `count(input)` that takes in a string and returns the number of characters.






// Write a function called `add(a, b)` that returns the sum of a and b






// Write a function called `subtract(a, b)` that return the difference between the two inputs.






// Write `multiply(a, b)` function that returns the product





// Write a divide(numerator, denominator) function that returns a divided by b







// Write a remainder(number, divisor) function that returns the remainder left
// over when dividing `number` by the `divisor`






// Write the function `square(a)` that takes in a number and returns the number multiplied by itself.








// # Super Duper Gold-Star Bonus
//Write a function called sumOfSquares(a, b) that uses only your add() function
// and your square function and not + or * operators







// Write a function called doMath(operator, a, b) that takes 3 parameters.
// The first parameter is the name of the math function you want to apply. a and b are
// the two numbers to run that function on.








})();