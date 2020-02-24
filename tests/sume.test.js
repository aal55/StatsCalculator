const addition = require('../functions/sum');
array = [1,2,3,4];

test('adds 1 + 2 to equal 3', () => {
    expect(addition.sum(1, 2)).toBe(3);
});

test('adds series of numbers to equal 10', () => {
    expect(addition.sum(array)).toBe(10);
});