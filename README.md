# StatsCalculator
[![Coverage Status](https://coveralls.io/repos/github/aal55/StatsCalculator/badge.svg?branch=Simple_Math_Functions)](https://coveralls.io/github/aal55/StatsCalculator?branch=Simple_Math_Functions) [![Build Status](https://travis-ci.com/aal55/StatsCalculator.svg?branch=master)](https://travis-ci.com/aal55/StatsCalculator)

**Bryan Bronstein:** Simple math functions (sum, divide, etc.), Math Operations, Calculator, Descriptive Stats functions

**Aaron Leu:** Random Number Generator, Population Sampling functions



## Project Plan
###Program Diagram
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


###Task List
















