// DEFAULT FUNCTION PARAMETERS
function multiply(X: any, Y = 20) {
    return X * Y;
}

console.log(multiply(10));
console.log(multiply(10, 10));