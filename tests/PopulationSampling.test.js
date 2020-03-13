const random = require('../functions/Random');
const PopulationSampling = require('../functions/PopulationSampling');
let pop = new PopulationSampling();

test('does a simple random sample', () => {
    let population = random.getSeededIntList('0', 1000, 1, 1000);
    let sampleSize = random.getSeededInt('0', 1, 10); // 8
    let sample1 = pop.SimpleRandomSampling(population, sampleSize);
    let sample2 = pop.SimpleRandomSampling(population, sampleSize);
    expect(sample1).toEqual(expect.not.arrayContaining(sample2));
});

test('does systematic sampling', () => {
    let population = random.getSeededIntList('0', 15, 1, 1000); // [412, 229, 382, 814, 925, 239, 919, 649, 475, 647, 317, 713, 429, 867, 376]
    let sampleSize = random.getSeededInt('2', 1, 3); // 3
    let sample = pop.SystematicSampling(population, sampleSize);
    expect(sample).toEqual([925, 647, 376]);
});

test('gives a confidence interval for sample size', () =>  {
    let sample = random.getSeededIntList('0', 10, 1, 20); // [9, 5, 8, 17, 19, 5, 19, 13, 10, 13]
    let ci = pop.ConfidenceInterval_Sample(sample, 0.05);
    expect(ci).toEqual([8.522956889568073, 15.077043110431928]);
});

test('gives margin of error', () => {
    let size = random.getSeededInt('0', 1, 10); // 8
    let moe = pop.MarginOfError(1.28, 18.12, size);
    expect(moe).toBe(8.200175920064154);
});

test('gives a confidence interval', () => {
    let stat = random.getSeededInt('0', 20, 25); // 24
    let size = random.getSeededInt('0', 1, 10); // 8
    let ci = pop.ConfidenceInterval(stat, 1.28, 18.12, size);
    expect(ci).toEqual([15.799824079935846, 32.200175920064154]);
});

test('does cochran\'s formula' , () => {
    let population = random.getSeededInt('0', 50000, 100000); // 89018
    let size = random.getSeededInt('0', 1, 40000); // 31215
    let cochran = pop.Cochran(1.28, population, 5, size);
    expect(cochran).toBe(149.22376172530403);
});

test('gives a confidence interval (population standard deviation unknown)', () => {
    let x = random.getSeededInt('0', 30, 50); // 46
    let size = random.getSeededInt('0', 1, 20); // 16
    let ci = pop.ConfidenceInterval_UnknownStDev(x, 18.12, size, 1.96);
    expect(ci).toEqual([37.1212, 54.8788]);
});

test('gives a confidence interval (population standard deviation known)', () => {
    let x = random.getSeededInt('0', 30, 50); // 46
    let size = random.getSeededInt('0', 1, 20); // 16
    let ci = pop.ConfidenceInterval_KnownStDev(x, 18.12, size, 1.28);
    expect(ci).toEqual([40.2016, 51.7984]);
});