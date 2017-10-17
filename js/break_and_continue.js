(function (){
    'use strict';


    var usersNumber = prompt('Enter a number between 1 and 50:');


    while (usersNumber > 50 || usersNumber <= 0 || usersNumber % 2 === 0) {
        alert("Hey! You can't do that!");
        usersNumber = prompt('Enter a number:');
    }
    console.log("Number to Skip: " + usersNumber);

    for (var i = 1; i < 50; i++) {
        if (i % 2 === 0) {
            continue;
        }
        if (i == usersNumber) {
            console.log("Yikes! Skipping number: " + usersNumber);
            continue;
        }

        console.log("Here is an odd number: " + i);
    }



})();