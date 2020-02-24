const divide = require('../functions/divide');

test('divides 6 and 2 to equal 3', () => {
    expect(divide(6, 2)).toBe(3);
});