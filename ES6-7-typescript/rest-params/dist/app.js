"use strict";
function sumAll(message) {
    var arr = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arr[_i - 1] = arguments[_i];
    }
    return arr.reduce(function (prev, next) { return prev + next; });
}
var sum = sumAll('test', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(sum);
