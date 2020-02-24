const square = require('../functions/square');

test('square 6 to equal 36', () => {
    expect(square(6)).toBe(36);
});