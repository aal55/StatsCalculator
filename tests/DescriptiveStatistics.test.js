const Statistics = require('../functions/DescriptiveStatistics');
let Stat = new Statistics();

test('calculating mean', () => {
    let array = [1,2,3,4];
    let mean = Stat.Mean(array);

    expect(mean).toBe(2.5);
});
test('calculating median when set of numbers is even', () => {
    let array = [1,2,3,4];
    let median = Stat.Median(array);

    expect(median).toBe(2.5);
});
test('calculating median when set of numbers is odd', () => {
    let array = [1,2,3,4,5];
    let median = Stat.Median(array);

    expect(median).toBe(3);
});
test('calculating mode', () => {
    let array = [1,2,2,2,5];
    let mode = Stat.Mode(array);

    expect(mode).toStrictEqual([2]);
});
test('calculating variance', () => {
    let a = 2;
    let b = 1;
    let variance = Stat.Variance(a,b);

    expect(variance).toBe(1);
});
test('calculating standard deviation for POPULATION', () => {
    let array = [1,2,3,4,5,8,9,12];
    let stdDev = Stat.StdDeviation(array);

    expect(stdDev).toBe(3.570714214271425);
});
test('calculating standard deviation for SAMPLE', () => {
    let array = [1,2,3,4,5,8,9,12];
    let stdDev = Stat.StdDeviation_Sample(array);

    expect(stdDev).toBe(3.8172540616821107);
});

test('calculating quartiles of a data set', () => {
    let array = [13,15,19,26,36,45,55,87,90];
    let quartiles = Stat.Quartiles(array);

    expect(quartiles).toStrictEqual([17,36,71]);
});
test('calculating skewness of a data set', () => {
    let array = [13,15,19,26,36,45,55,87,90];
    let skew = Stat.Skewness(array);

    expect(skew).toBe(0.7947203121326124);
});
test('calculating sample correlation of a data set', () => {
    let array1 = [1,2,3,4,5,6];
    let array2 = [2,2,3,4,5,60];
    let sampcorr = Stat.SampleCorrelation(array1,array2);

    expect(sampcorr).toBe(0.6906626864601291);
});
test('calculating POPULATION correlation of a data set', () => {
    let array1 = [1,2,3,4,5,6];
    let array2 = [2,2,3,4,5,60];
    let popcorr = Stat.PopulationCorrelation(array1,array2);

    expect(popcorr).toBe(0.690662686460129);
});
test('calculating z-score of a data set', () => {
    let array = [13,15,19,26,36,45,55,87,90];
    let datapoint = 78;
    let score = Stat.Zscore(datapoint,array);

    expect(score).toBe(1.2689023575295242);
});
test('calculating mean deviation of a data set', () => {
    let array = [3, 6, 6, 7, 8, 11, 15, 16];
    let meandev = Stat.MeanDeviation(array);

    expect(meandev).toBe(3.75);
});