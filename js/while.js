(function () {
    'use strict';




    // var i = 1;
    //
    // while (i < 65536) {
    //     i += i;
    //     console.log(i);
    // }



    var allCones = Math.floor(Math.random() * 50) + 50;

    do{
        var customerPurchase = Math.floor(Math.random() * 5) + 1;
        if (customerPurchase > allCones) {
            console.log("Cannot sell you " + customerPurchase + " I only have " + allCones + "...");
        } else {
            console.log(customerPurchase + " cones sold...");
            allCones = allCones - customerPurchase;
        }
    } while (allCones > 0);

    console.log("Yay! I sold them all!");







})();