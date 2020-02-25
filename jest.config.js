// jest.config.js
module.exports = {
    verbose: true,
    testURL: "http://localhost:8000/",
    "coverageDirectory": "./tests/coverage",

    "coveragePathIgnorePatterns": [
        "./jest",
    ],
};