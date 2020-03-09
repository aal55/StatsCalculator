const CSVReader = require('../data/parsecsv');
const City = require('../models/cities');
let reader = new CSVReader();
let csvFile = '../data/worldcities_short.csv';

test('create an instance of the City object', () => {
    let city = new City();
    expect(city).toBeInstanceOf(City);
});

test('list all data from csv file', () => {
    expect(reader.ReadFile(csvFile)).toBe(12);
});
