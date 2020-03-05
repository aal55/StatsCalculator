const seedrandom = require('seedrandom');

class Random {
    static getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    static getRandomFloat(min, max) {
        return Math.random() * (max - min) + min;
    }
    static getSeededInt(seed, min, max) {
        let rng = seedrandom(seed);
        return Math.floor(rng() * (max - min + 1) + min);
    }
    static getSeededFloat(seed, min, max) {
        let rng = seedrandom(seed);
        return rng() * (max - min) + min;
    }
    static getSeededIntList(seed, size, min, max) {
        let arr = [];
        let rng = seedrandom(seed);
        for(let i = 0; i < size; i++) {
            arr[i] = this.getSeededInt(rng(), min, max);
        }
        return arr;
    }
    static getSeededFloatList(seed, size, min, max) {
        let arr = [];
        let rng = seedrandom(seed);
        for(let i = 0; i < size; i++) {
            arr[i] = this.getSeededFloat(rng(), min, max);
        }
        return arr;
    }
    static getRandomItem(arr) {
        let pos = this.getRandomInt(0, arr.length - 1);
        return arr[pos];
    }
    static getSeededItem(seed, arr) {
        let pos = this.getSeededInt(seed,0, arr.length - 1);
        return arr[pos];
    }
    static selectRandomItems(arr) {
        let temp = [];
        let n = this.getRandomInt(0, arr.length - 1);
        for(let i = 0; i < n; i++) {
            temp[i] = arr[i];
        }
        return temp;
    }
    static selectSeededItems(seed, arr) {
        let temp = [];
        let pos = this.getSeededInt(seed, 0, arr.length - 1);
        for(let i = 0; i < pos; i++) {
            temp[i] = arr[i];
        }
        return temp;
    }
}
module.exports = Random;