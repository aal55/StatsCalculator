const subtract = require('../functions/subtract');

test('subtract 6 and 2 to equal 4', () => {
    expect(subtract(6, 2)).toBe(4);
});