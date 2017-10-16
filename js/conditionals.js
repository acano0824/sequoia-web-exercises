
    "use strict";

    /**
     * TODO:
     * Write some JavaScript that uses a `confirm` dialog to ask the user if they
     * would like to enter a number. If they click 'Ok', prompt the user for a
     * number, then use 3 separate alerts to tell the user:
     *
     * - whether the number is even or odd
     * - what the number plus 100 is
     * - if the number is negative or positive
     *
     * if what the user enters is not a number, use an alert to tell them that, and
     * do *not* display any of the above information.
     *
     * Can you refactor your code to use functions?
     */

    if (confirm('Would you like to enter a number?')) {
        var number = prompt('What number?');
        if (isNaN(number)) {
            alert("It's not a number!");
        } else {
            if (number % 2 === 0) {
                alert("It's even");
            } else {
                alert("It's odd");
            }
            alert(parseInt(number) + 100);
            if (number < 0) {
                alert("It's Negative");
            } else {
                alert("It's Positive");
            }
        }
    }







    // if (confirm('Would you like to enter a number?')) {
    //
    //     var number = prompt('What number?');
    //     console.log('The user entered: ' + number);
    //
    //     if (isNaN(number)) {
    //         alert("This isn't a number!");
    //     } else {
    //         number = parseInt(number);
    //         var evenOrOdd = number % 2 == 0 ? "It's even" : "It's odd";
    //         console.log(evenOrOdd);
    //
    //         var numPlusHundo = number + 100;
    //         console.log(numPlusHundo);
    //
    //         var posOrNeg = number >= 0 ? "It's Positive" : "It's negative";
    //         console.log(posOrNeg);
    //     }
    // }



// function checkingNumbers () {
//     if (confirm('Would you like to enter a number?')) {
//
//         var number = prompt('What number?');
//         console.log('The user entered: ' + number);
//
//         if (isNaN(number)) {
//             alert("This isn't a number!");
//         } else {
//             number = parseInt(number);
//             var evenOrOdd = number % 2 == 0 ? "It's even" : "It's odd";
//             console.log(evenOrOdd);
//
//             var numPlusHundo = number + 100;
//             console.log(numPlusHundo);
//
//             var posOrNeg = number >= 0 ? "It's Positive" : "It's negative";
//             console.log(posOrNeg);
//         }
//     }
// }
//
// checkingNumbers();

    /* ########################################################################## */

    /**
     * TODO:
     * Create a function named `analyzeColor` that accepts a string that is a color
     * name as input. This function should return a message that related to that
     * color. Only worry about the colors defined above, if the color passed is not
     * one of the ones defined above, return a message that says so
     *
     * Example:
     *  > analyzeColor('blue') // returns "blue is the color of the sky"
     *  > analyzeColor('red') // returns "Strawberries are red"
     *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
     *
     * You should use an if-else-if-else block to return different messages.
     *
     * Test your function by passing various string literals to it and
     * console.logging the function's return value
     */

    function analyzeColor(color) {
        if (color == "blue") {
            return "blue is the color of the sky";
        } else if (color == "red") {
            return "Strawberries are red";
        } else if (color == "cyan") {
            return "I don't know anything about cyan";
        } else {
            return "Not sure about that color";
        }
    }

    console.log(analyzeColor("cyan"));





    // function analyzeColor(input) {
    //     var message = "";
    //
    //     if(input === "Blue") {
    //         message = "Blue is the color of the sky.";
    //     } else if (input === "yellow") {
    //         message = "Yellow is meh.";
    //     } else if (input === "purple") {
    //         message = "Purple is barney";
    //     } else {
    //         message = "not sure about that color.";
    //     }
    //
    //     return message;
    // }
    //
    //     console.log(analyzeColor("yellow"));

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
//         var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
        // var randomColor = colors[Math.floor(Math.random() * colors.length)];
        /**
         * TODO:
         * Pass the `randomColor` variable to your function and console.log the results.
         * You should see a different message every time you refresh the page
         */

        /**
         * TODO:
         * Refactor your above function to use a switch-case statement
         */

        /**
         * TODO:
         * Prompt the user for a color when the page loads, and pass the input from the
         * user to your `analyzeColor` function. Alert the return value from your
         * function to show it to the user.
         */

        /* ########################################################################## */

        /**
         * TODO:
         * Suppose there's a promotion in Walmart, each customer is given a randomly
         * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
         * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
         * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
         * all for free!.
         *
         * Write a function named `caculateTotal` that accepts a lucky number and total
         * amount, and returns the discounted price.
         *
         * Example:
         * calculateTotal(0, 100) // returns 100
         * calculateTotal(4, 100) // returns 50
         * calculateTotal(5, 100) // returns 0
         *
         * Test your function by passing it various values and checking for the expected
         * return value.
         */

        /**
         * TODO:
         * Uncomment the line below to generate a random number between 0 and 6.
         * Prompt the user for their total bill, then use your `calculateTotal` function
         * and alerts to display to the user what their lucky number was, what their
         * price before the discount was, and what their price after the discount is.
         */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);

    /**
     * ================================= CONDITIONALS BONUSES

     Bonus 1

     Create a function that prompts a user for their favorite day of the week and alerts a unique message based on the day.
     - Catch any invalid inputs.
     - Write the logic using if/else ifs and then refactor using a switch case

     Bonus 2

     Create a function that prompts the user for an input and then alerts if the input is a number or not a number.
     - use an if/else
     - refactor to use a ternary operator

     Bonus 3

     Create a function that prompts a user for a season (Spring, Summer, Fall (or Autumn), Winter). The function then alerts the months available in that season and then asks the user to pick a given month. After selecting the month, alert a unique message for the month.
     - account for any invalid user input
     - case of input should not matter
     - accept both abbreviations and full names of the months

     GOLD STAR BONUS

     Create a distance unit conversion application.
     Prompt the user for a unit of measurement.
     Prompt the user for a value.

     Prompt the user for a second unit of measurement to convert to.

     Possible approach…
     define multiple functions to convert: inchesToFeet, feetToMiles, milesToLightYears
     then the opposite versions: lightYearsToMiles, milesToFeet, feetToInches

     Use these conversion functions to make the correct unit conversion

     Potentially, you will need a large switch case to account for the possible unit conversion combinations,
     i.e. what conversion functions will need to be called in and in what order.

     DOUBLE GOLD STAR BONUS

     Allow unit conversion to metric system units


     */
