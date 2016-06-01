'use strict';

function fibonacci_series(n) {
   var num1 = 0;
        var num2 = 1;
        var arr=[0,1];
        var num3;
    for (var i = 2; i <= n; i++) {
        num3 = num1 + num2;
        num1 = num2;
        num2 = num3;
        arr.push(num3);
    }
    return arr;
}

module.exports = fibonacci_series;
