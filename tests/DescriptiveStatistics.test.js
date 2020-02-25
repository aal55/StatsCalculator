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