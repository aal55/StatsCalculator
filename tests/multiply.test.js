const multiply = require('../functions/multiply');

test('multiply 6 and 2 to equal 12', () => {
    expect(multiply(6, 2)).toBe(12);
});