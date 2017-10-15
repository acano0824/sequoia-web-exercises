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


    // function sayHello(name) {
    //     var message = "hello, " + name + "!";
    //     return message;
    //
    // }
    //
    // console.log(sayHello("codeup"));


    /**
     * TODO:
     * Call the function 'sayHello' and pass your name as a string literal argument.
     * Store the result of the function call in a variable named 'helloMessage'.
     *
     * console.log 'helloMessage' to check your work
     */


    // var helloMessage = sayHello("Ashley");
    //
    // console.log(helloMessage);



    /**
     * TODO:
     * Store your name as a string in a variable named 'myName', and pass that
     * variable to the 'sayHello' function. You should see the same output in the
     * console.
     */


    // var myName = "Ashley";
    //
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
     * different result every time you refresh the page if you are using the random
     * number)
     */


    // function isTwo(number) {
    //     var comparison = number == 2;
    //     return comparison;
    //
    // }
    //
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



    // function calculateTip(percent, total) {
    //     var tip = total * (percent/100);
    //     return tip;
    // }



    /**
     * TODO:
     * Use prompt and alert in combination with your calculateTip function to
     * prompt the user for the bill total and a percentage they would like to tip,
     * then display the dollar amount they should tip
     */


    // var billTotal = prompt("What was the bill total?");
    //
    // var percentage = prompt("What percentage would you like to tip?");
    //
    // alert("You can tip $" + calculateTip(billTotal, percentage));





//Write a function called `identity(input)` that takes in an argument called
// input and returns that input.

function identity(input) {
    return input;
}
    console.log(identity("name"));



//Write a function called `getRandomNumber(min, max)` that returns a random number
// between min and max values sent to that function call.


function getRandomNumber(min, max) {
    var random = Math.floor((Math.random() * max) + min);
    return random;
}

console.log(getRandomNumber(9, 80));


//Write a function called `first(input)` that returns the first character in the provided string.

function first(input) {
    var firstChar = input.charAt(0);
    return firstChar;
}

console.log(first("CHOCOLATE"));


//Write a function called `last(input)` that returns the last character of a string


function last(input) {
    var lastChar = input.charAt(input.length-1);
    return lastChar;

}

console.log(last("Umbrella"));


// Write a function called `rest(input)` that returns everything but the first character of a string.


function rest(input) {
    var notFirst = input.slice(1);
    return notFirst;
}
 console.log(rest("Cloud"));


// Write a function called `reverse(input)` that takes a string and returns it reversed.


function reverse(input) {
    var reversed = input.split("").reverse().join("");
    return reversed;
}
console.log(reverse("rabbit"));



//Write a function called `isNumeric(input)` that takes an input and
// returns a boolean if the input is numeric.

function isNumeric(input) {
    var numericBoolean = !isNaN(input);
    return numericBoolean
}

console.log(isNumeric('something'));

console.log(isNumeric(2));




// Write a function called `count(input)` that takes in a string and returns the number of characters.



function count(input) {
    var numberChar = input.length;
    return numberChar;
}

console.log(count("banana"));



// Write a function called `add(a, b)` that returns the sum of a and b


function add(a, b) {
    var sum = parseInt(a) + parseInt(b);
    return sum;
}
    console.log(add("30", "4"));
    console.log(add(55, 20));




// Write a function called `subtract(a, b)` that return the difference between the two inputs.


function subtract(a, b) {
    var difference = parseInt(a) - parseInt(b);
    return difference;
}

    console.log(subtract(4, 10));



// Write `multiply(a, b)` function that returns the product

function multiply(a, b) {
    var product = parseInt(a) * parseInt(b);
    return product;
}

    console.log(multiply(6, 6));


// Write a divide(numerator, denominator) function that returns a divided by b


function divide(numerator, denominator) {
    var answer = parseInt(numerator) / parseInt(denominator);
    return answer;
}
    console.log(divide(12, 4));



// Write a remainder(number, divisor) function that returns the remainder left
// over when dividing `number` by the `divisor`

function remainder(number, divisor) {
    var remAnswer = parseInt(number) % parseInt(divisor);
    return remAnswer;
}

console.log(remainder(12, 11));



// Write the function `square(a)` that takes in a number and returns the number multiplied by itself.

function square(a) {
    var multNum = parseInt(a) * parseInt(a);
    return multNum;
}
    console.log(square(4));




// # Super Duper Gold-Star Bonus
//Write a function called sumOfSquares(a, b) that uses only your add() function
// and your square function and not + or * operators


function sumOfSquares(a, b) {
    var sum = add(square(a), square(b));
    return sum;
}

console.log(sumOfSquares(2, 4));


// Write a function called doMath(operator, a, b) that takes 3 parameters.
// The first parameter is the name of the math function you want to apply. a and b are
// the two numbers to run that function on.

function doMath(operator, a, b) {
    var answer = operator(a, b);
    return answer;
}

console.log(doMath(sumOfSquares, 2, 3));




})();