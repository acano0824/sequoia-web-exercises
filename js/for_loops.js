(function () {
    'use strict';

// function showMultiplicationTable(num) {
//
//     for (var i = 1; i <= 10; i += 1) {
//         console.log(num + " x " + i + " = " + (num * i));
//     }
//
// }
//     showMultiplicationTable(7);

//
// for (var i = 1; i <= 10; i++) {
//     var random = Math.floor(Math.random() * 200) + 20;
//     if (random % 2 === 0) {
//         console.log(random + " is even");
//     } else {
//         console.log(random + " is odd");
//     }
// }


for (var i = 1; i <= 9; i++) {
    var string = i.toString();
    var output = '';
    for (var j = 0; j < i; j++) {
        output += string;
    }
    console.log(output);
}



// for (var i = 100; i >= 5; i -= 5) {
//     console.log(i);
// }






})();