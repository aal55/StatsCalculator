const Calculator = require('../functions/Calculator');
let Calc = new Calculator();
let array = [1,2,3,4];

test('Multiply 6 and 2 to equal 12', () => {
    expect(Calc.Multiply(6, 2)).toBe(12);
    expect(Calc.result).toBe(12);
});

test('Divide 6 and 2 to equal 3', () => {
    expect(Calc.Divide(6, 2)).toBe(3);
    expect(Calc.result).toBe(3);
});

test('Add 6 and 2 to equal 8', () => {
    expect(Calc.Add(6, 2)).toBe(8);
    expect(Calc.result).toBe(8);
});

test('Subtract 6 and 2 to equal 4', () => {
    expect(Calc.Subtract(6, 2)).toBe(4);
    expect(Calc.result).toBe(4);
});
test('Square 6 to equal 36', () => {
    expect(Calc.Square(6)).toBe(36);
    expect(Calc.result).toBe(36);
});
test('Square root of 36 to equal 6', () => {
    expect(Calc.SquareRoot(36)).toBe(6);
    expect(Calc.result).toBe(6);
});
test('Calculator add array of 1,2,3,4 and get result 10', () => {
    expect(Calc.Add(array)).toBe(10);
    expect(Calc.result).toBe(10);

});