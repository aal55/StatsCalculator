const Calculator = require('./Calculator');
const Stat = require('./DescriptiveStatistics');
const Random = require('./Random');
const { jStat } = require('jstat');

class PopulationSampling extends Calculator {
    SimpleRandomSampling(population, sampleSize) {
        return Random.selectRandomItems(sampleSize, population);
    }
    SystematicSampling(population, sampleSize) {
        let temp = [];
        let n = Math.floor(this.Divide(population.length, sampleSize));
        let pos = n;
        for(let i = 0; i < sampleSize; i++) {
            temp[i] = population[n - 1];
            n += pos;
        }
        return temp;
    }
    ConfidenceInterval_Sample(values, alpha) {
        let stat = new Stat();
        return jStat.normalci(stat.Mean(values), alpha, stat.StdDeviation_Sample(values), values.length);
    }
    MarginOfError(z, stDev, size) {
        return this.Divide(this.Multiply(z, stDev), this.SquareRoot(size));
    }
    ConfidenceInterval(stat, z, stDev, size) {
        let arr = [];
        arr[0] = this.Subtract(stat, this.MarginOfError(z, stDev, size));
        arr[1] = this.Add(stat, this.MarginOfError(z, stDev, size));
        return arr;
    }
    Cochran(z, population, error, size) {
        let p = this.Divide(size, population);
        let q = this.Subtract(1, p);
        let pq = this.Multiply(p, q);
        let e = this.Divide(error, 100);
        return this.Divide(this.Multiply(this.Square(z), pq), this.Square(e));
    }
    ConfidenceInterval_UnknownStDev(x, s, size, t) {
        let arr = [];
        arr[0] = this.Subtract(x, this.MarginOfError(t, s, size));
        arr[1] = this.Add(x, this.MarginOfError(t, s, size));
        return arr;
    }
    ConfidenceInterval_KnownStDev(x, s, size, z) {
        let arr = [];
        arr[0] = this.Subtract(x, this.MarginOfError(z, s, size));
        arr[1] = this.Add(x, this.MarginOfError(z, s, size));
        return arr;
    }
}
module.exports = PopulationSampling;