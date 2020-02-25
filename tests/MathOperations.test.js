const MathOperations = require('../functions/MathOperations');
array = [1,2,3,4,5];

test('add 1,2,3,4,5 to equal 15', () => {
    expect(MathOperations.sum(array)).toBe(15);
});

test('Multiply 6 and 2 to equal 12', () => {
    expect(MathOperations.product(6, 2)).toBe(12);
});

test('Divide 6 and 2 to equal 3', () => {
    expect(MathOperations.quotient(6, 2)).toBe(3);
});

test('Add 6 and 2 to equal 8', () => {
    expect(MathOperations.sum(6, 2)).toBe(8);
});

test('Subtract 6 and 2 to equal 4', () => {
    expect(MathOperations.difference(6, 2)).toBe(4);
});
test('Square 6 to equal 36', () => {
    expect(MathOperations.square(6)).toBe(36);
});
test('Square root of 36 to equal 6', () => {
    expect(MathOperations.squareRoot(36)).toBe(6);
});