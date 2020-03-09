const parse = require('csv-parse');
const fs = require('fs');
const Cities = require('../models/cities');
const output = [];

class CSVReader {
    ReadFile(csvFilePath){
        fs.createReadStream(csvFilePath)
    .pipe(parse({
        columns: true,
        delimiter: ',',
        trim: true,
        skip_empty_lines: true
    })
    .on('readable', function(){
        let record;
        while (record = this.read()) {
            let city = new Cities(record);
            output.push(record);
        }
    })
        // When we are done, test that the parsed output matched what expected
        .on('end', function(){
            console.log(output);
        }));
    }
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question(`Enter the full path to the .csv file you would like read:`, (input) => {
    let reader = new CSVReader();
    reader.ReadFile(input);
    readline.close()
});

module.exports = CSVReader;