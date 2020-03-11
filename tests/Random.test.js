const random = require('../functions/Random');

test('get a random int in a range', () => {
    for(let i = 0; i < 100; i++) {
        let rand = random.getRandomInt(1, 5);
        expect(rand).toBeGreaterThanOrEqual(1) && expect(rand).toBeLessThanOrEqual(5);
    }
});

test('get a random float in a range', () => {
   for(let i = 0; i < 100; i++) {
       let rand = random.getRandomFloat(1, 2);
       expect(rand).toBeGreaterThanOrEqual(1) && expect(rand).toBeLessThanOrEqual(2);
   }
});

test('get a seeded int in a range', () => {
    let rand = random.getSeededInt('0', 1, 5);
    expect(rand).toBe(4);
});

test('get a seeded float in a range', () => {
    let rand = random.getSeededFloat('0', 1, 5);
    expect(rand).toBe(4.121425353692027);
});

test('get a seeded int list', () => {
    let list = random.getSeededIntList('0', 5, 1, 5);
    expect(list).toEqual([3, 2, 2, 5, 5]);
});

test('get a seeded float list', () => {
    let list = random.getSeededFloatList('0', 3, 1, 5);
    expect(list).toEqual([2.647065786298457, 1.9137224085222893, 2.525036632746356]);
});

test('get a random item from a list', () => {
    let arr = [1, 2, 3];
    let num = random.getRandomItem(arr);
    for(let i = 0; i < 10; i++) {
        expect(num).toBeGreaterThanOrEqual(1) && expect(num).toBeLessThanOrEqual(3);
    }
});

test('get a seeded item from a list', () => {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let num = random.getSeededItem('0', arr);
    expect(num).toBe(8);
});

test('get a random selection from a list', () => {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let selection = random.selectRandomItems(3, arr);
    expect(selection).toHaveLength(3) && expect(arr).toContain(selection[0])
    && expect(arr).toContain(selection[1]) && expect(arr).toContain(selection[2]);
});

test('get a seeded selection from a list', () => {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let selection = random.selectSeededItems('0', 3, arr);
    expect(selection).toEqual([5, 3, 6]);
});
