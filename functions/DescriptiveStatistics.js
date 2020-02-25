const Calculator = require('./Calculator');

class Statistics extends Calculator {
    Variance(a,b) {
        return this.Subtract(a,b);
    }

    Mean(values) {
        let sum = this.Add(values);
        let numValues = values.length;
        return this.Divide(sum,numValues);
    }
        Mean_Sample(values) { //used for StdDeviation_Sample function
            let sum = this.Add(values);
            let numValues = this.Subtract(values.length, 1);
            return this.Divide(sum,numValues);
        }

    Median(values){
        let median;
        let numValues = values.length;
        if (numValues % 2 === 0 ) { //if array is even
            median = (values[numValues / 2 - 1] + values[numValues / 2]) / 2;
        } else {
            median = values[(numValues - 1) / 2];
        }
        return median;
    }

    Mode(values){
        let modes = [];
        let count = [];
        let number;
        let maxIndex = 0;

        for (let i = 0; i < values.length; i += 1) {
            number = values[i];
            count[number] = (count[number] || 0) + 1;
            if (count[number] > maxIndex) {
                maxIndex = count[number];
            }
        }

        for (let i in count)
            if (count.hasOwnProperty(i)) {
                if (count[i] === maxIndex) {
                    modes.push(Number(i));
                }
            }
        return modes;
    }

    StdDeviation(values){//for population
        let mean = this.Mean(values);
        let newValues = [];

        for (let i = 0; i < values.length; i++) {
            let newItem = this.Subtract(values[i], mean);
            newItem = this.Square(newItem);
            newValues.push(newItem);
        }
        let newMean = this.Mean(newValues);
        return this.SquareRoot(newMean);
    }
        StdDeviation_Sample(values){//for sample of population
            let mean = this.Mean(values);
            let newValues = [];

            for (let i = 0; i < values.length; i++) {
                let newItem = this.Subtract(values[i], mean);
                newItem = this.Square(newItem);
                newValues.push(newItem);
            }
            let newMean = this.Mean_Sample(newValues);
            return this.SquareRoot(newMean);
        }


}
module.exports = Statistics;