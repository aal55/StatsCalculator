const addition = require('./sum');
const multiply = require('./multiply');
const divide = require('./divide');
const subtract = require('./subtract');
const square = require('./square');
const squareroot = require('./squareroot');

class MathOperations {
    static sum(a = null, b = null) {
        if(Array.isArray(a)) {
            return addition.sum(a);
        } else {
            return addition.sum(a,b);
        }
    }
    static product(a,b) {
        return multiply(a,b);
    }
    static quotient(a,b) {
        return divide(a,b);
    }
    static difference (a,b){
        return subtract(a,b);
    }
    static square (a){
        return square(a);
    }
    static squareRoot (a){
        return squareroot(a);
    }
}

module.exports = MathOperations;