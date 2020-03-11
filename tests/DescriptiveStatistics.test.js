const Statistics = require('../functions/DescriptiveStatistics');
const random = require('../functions/Random');
let Stat = new Statistics();

test('calculating mean', () => {
    let array = random.getSeededIntList('0', 5, 1, 5); // [3, 2, 2, 5, 5]
    let mean = Stat.Mean(array);

    expect(mean).toBe(3.4);
});
test('calculating median when set of numbers is even', () => {
    let array = random.getSeededIntList('0', 8, 1, 10); // [5, 3, 4, 9, 10, 3, 10, 7]
    let median = Stat.Median(array);

    expect(median).toBe(9.5);
});
test('calculating median when set of numbers is odd', () => {
    let array = random.getSeededIntList('0', 5, 1, 5); // [3, 2, 2, 5, 5]
    let median = Stat.Median(array);

    expect(median).toBe(2);
});
test('calculating mode', () => {
    let array = random.getSeededIntList('1029', 10, 1, 10); // [7, 8, 10, 7, 9, 9, 7, 4, 1, 4]
    let mode = Stat.Mode(array);

    expect(mode).toStrictEqual([7]);
});
test('calculating variance for POPULATION', () => {
    let array = random.getSeededIntList('1029', 10, 1, 10); // [7, 8, 10, 7, 9, 9, 7, 4, 1, 4]
    let variance = Stat.Variance(array);

    expect(variance).toBe(7.040000000000002);
});
test('calculating variance for SAMPLE', () => {
    let array = random.getSeededIntList('1029', 10, 1, 10); // [7, 8, 10, 7, 9, 9, 7, 4, 1, 4]
    let variance = Stat.Variance_Sample(array);

    expect(variance).toBe(7.822222222222224);
});
test('calculating standard deviation for POPULATION', () => {
    let array = random.getSeededIntList('1029', 10, 1, 10); // [7, 8, 10, 7, 9, 9, 7, 4, 1, 4]
    let stdDev = Stat.StdDeviation(array);

    expect(stdDev).toBe(2.65329983228432);
});
test('calculating standard deviation for SAMPLE', () => {
    let array = random.getSeededIntList('1029', 10, 1, 10); // [7, 8, 10, 7, 9, 9, 7, 4, 1, 4]
    let stdDev = Stat.StdDeviation_Sample(array);

    expect(stdDev).toBe(2.7968235951204043);
});

test('calculating quartiles of a data set', () => {
    let array = random.getSeededIntList('1012', 10, 1, 100); // [33, 2, 74, 90, 39, 76, 21, 21, 30, 9]
    let quartiles = Stat.Quartiles(array);

    expect(quartiles).toStrictEqual([21, 38, 57.5]);
});
test('calculating skewness of a data set', () => {
    let array = random.getSeededIntList('1012', 10, 1, 100); // [33, 2, 74, 90, 39, 76, 21, 21, 30, 9]
    let skew = Stat.Skewness(array);

    expect(skew).toBe(0.6210731411443196);
});
test('calculating sample correlation of a data set', () => {
    let array1 = random.getSeededIntList('000', 7, 1, 10); // [5, 3, 4, 9, 10, 3, 10]
    let array2 = random.getSeededIntList('111', 7, 1, 10); // [10, 3, 3, 5, 8, 2, 5]
    let sampcorr = Stat.SampleCorrelation(array1,array2);

    expect(sampcorr).toBe(0.45274745847993053);
});
test('calculating POPULATION correlation of a data set', () => {
    let array1 = random.getSeededIntList('000', 7, 1, 10); // [5, 3, 4, 9, 10, 3, 10]
    let array2 = random.getSeededIntList('111', 7, 1, 10); // [10, 3, 3, 5, 8, 2, 5]
    let popcorr = Stat.PopulationCorrelation(array1,array2);

    expect(popcorr).toBe(0.45274745847993064);
});
test('calculating z-score of a data set', () => {
    let array = random.getSeededIntList('000', 10, 1, 100); // [42, 23, 39, 82, 93, 24, 92, 65, 48, 65]
    let datapoint = random.getSeededInt('0', 1, 100); // 79
    let score = Stat.Zscore(datapoint,array);

    expect(score).toBe(0.8751636531462145);
});
test('calculating mean deviation of a data set', () => {
    let array = random.getSeededIntList('1029', 10, 1, 10); // [7, 8, 10, 7, 9, 9, 7, 4, 1, 4]
    let meandev = Stat.MeanDeviation(array);

    expect(meandev).toBe(2.16);
});