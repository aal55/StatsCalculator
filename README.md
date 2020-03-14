# StatsCalculator
[![Coverage Status](https://coveralls.io/repos/github/aal55/StatsCalculator/badge.svg?branch=Simple_Math_Functions)](https://coveralls.io/github/aal55/StatsCalculator?branch=Simple_Math_Functions) [![Build Status](https://travis-ci.com/aal55/StatsCalculator.svg?branch=master)](https://travis-ci.com/aal55/StatsCalculator)

**Bryan Bronstein:** Simple math functions (sum, divide, etc.), Math Operations, Calculator, Descriptive Stats functions

**Aaron Leu:** Random Number Generator, Population Sampling functions



## Project Plan

### <i>Program Diagram</i>

**Descriptive Statistics Object (DescriptiveStatistics.js)**

1.Properties

    result 
    
    
2.Methods

    Mean -> Calculates the mean of a set of numbers (utilizes 'Add' function from Calculator.js)
    
        Mean_Sample -> Calculates the mean of a set of numbers of a sample of a population (utilizes 'Add' functions from Calculator.js)
            
    Median -> Calculates the median of a set of numbers
    
    Mode -> Calculates the mode of a set of numbers
    
    StdDeviation -> Calculates the standard deviation of a set of numbers (utilizes 'Subtract', 'Square', 'Mean', and 'Squareroot' functions from Calculator.js)

            StdDeviation_Sample -> Calculates the standard deviation of a sample of a population (utilizes 'Subtract', 'Square', 'Mean', and 'Squareroot' functions from Calculator.js)

    Quartiles -> Calculates the quartiles of a set of numbers
    
    Skewness -> Calculates the skewness of a set of numbers
    
    SampleCorrelation -> Calculates the correlation of a sample of a population
    
    PopulationCorrelation -> Calculates the correlation of a population
    
    Zscore -> Calculates the zscore of a set of numbers
    
    MeanDeviation -> Calculates the mean deviation of a set of numbers

**Calculator Object (Calculator.js)**

1.Properties

    result 
    
    
2.Methods

    Add -> Calls addition static method from math operations
            
    Subtract -> Call subtraction static method from Math operations
    
    Divide -> Call division static method from Math operations
    
    Multiply -> Call multiplication static method from Math operations

    Square -> Call square static method from Math operations
    
    Squareroot -> Call squareroot static method from Math operations
    
**RNG Object (Random.js)**

Methods

    getRandomInt -> Generates random int given min and max range
            
    getRandomFloat -> Generates random float given min and max range
    
    getSeededInt -> Generates random int (with seed) given min and max range
    
    getSeededFloat -> Generates random float (with seed) given min and max range
    
    getSeededIntList -> Generates random list of ints (with seed) given min and max range and size of list
    
    getSeededFloatList -> Generates random list of floats (with seed) given min and max range and size of list

    getRandomItem -> Generates ranom index of an array given an array
    
    getSeededItem -> Generates ranom index of an array (with seed) given an array
    
    selectRandomItems -> Selects random number of indexes given of an array 
    
    selectSeededItems -> Selects random number of indexes (with seed) given of an array 

**Math Operations Static Class (MathOperations.js)**

Methods

```
sum -> Calls addition class method of sum.js

difference -> Calls subtraction class method of subtract.js

product -> Calls multiply class method of multiply.js

quotient -> Calls divide class method of divide.js

square -> Calls square class method of square.js

squareroot -> Calls squareroot class method of squareroot.js
```


**Simple functions classes**


**sum.js**
```
addition -> Either sums an array of numbers or two numbers and returns result
```

**subtract.js**
```
subtract -> Subtract two numbers and return result
```

**multiply.js**
```
multiply -> Multiply two numbers and return result
```
**divide.js**
```
divide -> Divide two numbers and return result
```
**square.js**
```
square -> Square one number and return result
```
**squareroot.js**
```
squareroot -> Get squareroot of one number and return result
```


### <i>Task List<i/>

**Simple functions classes**


**sum.js**
```
addition -> Either sums an array of numbers or two numbers and returns result
    Example: 2 + 2 = 4
    or
    array[1, 2, 3, 4] = 10
```

**subtract.js**
```
subtract -> Subtract two numbers and return result
    Example: 4 - 2 = 2
```

**multiply.js**
```
multiply -> Multiply two numbers and return result
    Example: 2 * 2 = 4
```
**divide.js**
```
divide -> Divide two numbers and return result
     Example: 4 / 2 = 2
```
**square.js**
```
square -> Square one number and return result
     Example: 2^2 = 4
```
**squareroot.js**
```
squareroot -> Get squareroot of one number and return result
     Example: sqrt(4) = 2
```


**Math Operations Static Class (MathOperations.js)**

```
sum -> Calls addition class method of sum.js
    Example: 2 + 2 = 4
    or
    array[1, 2, 3, 4] = 10

difference -> Calls subtraction class method of subtract.js
   Example: 4 - 2 = 2

product -> Calls multiply class method of multiply.js
    Example: 2 * 2 = 4
    
quotient -> Calls divide class method of divide.js
    Example: 4 / 2 = 2

square -> Calls square class method of square.js
    Example: 2^2 = 4

squareroot -> Calls squareroot class method of squareroot.js
    Example: sqrt(4) = 2
```

**RNG Object (Random.js)**

Methods

    getRandomInt -> Generates random int given min and max range
        Example: min(1), max(20), result(10)
            
    getRandomFloat -> Generates random float given min and max range
        Example: min(1), max(20), result(10.05564)
    
    getSeededInt -> Generates random int (with seed) given min and max range
        Example: seed(1), min(1), max(20), result(10) 
    
    getSeededFloat -> Generates random float (with seed) given min and max range
        Example: seed(2), min(1), max(20), result(10.05564) 
    
    getSeededIntList -> Generates random list of ints (with seed) given min and max range and size of list
        Example: seed(3), min(1), max(20), listSize(4), result(1, 2, 3, 4) 
    
    getSeededFloatList -> Generates random list of floats (with seed) given min and max range and size of list
        Example: seed(4), min(1), max(20), listSize(4), result(1.1111, 2.2222, 3.3333, 4.4444) 

    getRandomItem -> Generates ranom index of an array given an array
        Example: array[1, 2, 3, 4], result(array[1]) 
    
    getSeededItem -> Generates ranom index of an array (with seed) given an array
        Example: seed(5), array[1, 2, 3, 4], result(array[1]) 
    
    selectRandomItems -> Selects random number of indexes given of an array 
        Example: array[1, 2, 3, 4], result(array[0, 1, 3]) 
    
    selectSeededItems -> Selects random number of indexes (with seed) given of an array 
        Example: array[1, 2, 3, 4], result(array[0, 1, 3]) 

**Calculator Object (Calculator.js)**

    Add -> Calls addition static method from math operations
        Example: 2 + 2 = 4
        or
        array[1, 2, 3, 4] = 10
            
    Subtract -> Call subtraction static method from Math operations
        Example: 4 - 2 = 2
    
    Divide -> Call division static method from Math operations
        Example: 4 / 2 = 2
    
    Multiply -> Call multiplication static method from Math operations
        Example: 2 * 2 = 4

    Square -> Call square static method from Math operations
        Example: 2^2 = 4
    
    Squareroot -> Call squareroot static method from Math operations
        Example: sqrt(4) = 2


**Descriptive Statistics Object (DescriptiveStatistics.js)**

    Mean -> Calculates the mean of a set of numbers (utilizes 'Add' function from Calculator.js)
        Formula: Sums list of numbers, divides by amount of numbers
        Example: [3, 2, 2, 5, 5] = 3.4
            
    Median -> Calculates the median of a set of numbers
        Formula: if array is odd, median = values[(numValues - 1) / 2]; 
                 if aray is even, median = (values[numValues / 2 - 1] + values[numValues / 2]) / 2;
        Example: [5, 3, 4, 9, 10, 3, 10, 7] = 9.5
    
    Mode -> Calculates the mode of a set of numbers
        Formula: Calculates how many times a number occurs in an array
        Example: [7, 8, 10, 7, 9, 9, 7, 4, 1, 4] = 7
    
    StdDeviation -> Calculates the standard deviation of a set of numbers (utilizes 'Subtract', 'Square', 'Mean', and 'Squareroot' functions from Calculator.js)
        Forumla: Get the Mean then for each number: subtract the Mean and square the result, then work out the mean of those squared differences, and then take the square root of that
        for (let i = 0; i < values.length; i++) {
                    let newItem = this.Subtract(values[i], mean);
                    newItem = this.Square(newItem);
                    newValues.push(newItem);
                    }
                 let newMean = this.Mean(newValues);
                 return this.SquareRoot(newMean);
        Example: [7, 8, 10, 7, 9, 9, 7, 4, 1, 4] = 2.65329983228432

    Quartiles -> Calculates the quartiles of a set of numbers
        Forula: Finds the numbers that respresent .25, .5, and .75 percent of a dataset
        let middle = Math.round(values.length/2);
                let q2 = this.Median(values);
                let q1 = this.Median(values.slice(0,middle-1));
                let q3 = this.Median(values.slice(middle+1,values.length -1));
                return [q1,q2,q3].sort();
        Example: [33, 2, 74, 90, 39, 76, 21, 21, 30, 9]

    Skewness -> Calculates the skewness of a set of numbers
        Forumla: Skew = 3 * (Mean – Median) / Standard Deviation
        Example: [33, 2, 74, 90, 39, 76, 21, 21, 30, 9] = 0.6210731411443196
    
    Correlation -> Calculates the correlation of a sample of a population
        Formula: Determines how strong relationship between two datasets are: Correlation is Positive when the values increase together,         and Correlation is Negative when one value decreases as the other increases
        Example: [5, 3, 4, 9, 10, 3, 10], [10, 3, 3, 5, 8, 2, 5] = 0.45274745847993053
    
    Zscore -> Calculates the zscore of a set of numbers
        Formula: z = (x-μ)/σ, where x is the raw score, μ is the population mean, and σ is the population standard deviation
        Example: 79, [42, 23, 39, 82, 93, 24, 92, 65, 48, 65] = 0.8751636531462145
    
    MeanDeviation -> Calculates the mean deviation of a set of numbers
        Formula: same as standard deviation, except when subtracting the mean from the dataset value, take the absolute value of that           subtraction
        Example: [7, 8, 10, 7, 9, 9, 7, 4, 1, 4] = 2.16
        

 


    
  




