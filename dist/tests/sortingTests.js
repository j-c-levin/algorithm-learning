"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extremesTesting = [
    {
        name: "no items",
        input: [],
        output: []
    },
    {
        name: "single item",
        input: [1],
        output: [1]
    },
    {
        name: "two items",
        input: [2, 1],
        output: [1, 2]
    },
    {
        name: "already in order",
        input: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    },
    {
        name: "reversed",
        input: [9, 8, 7, 6, 5, 4, 3, 2, 1],
        output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    }
];
function generateSortingTest() {
    var sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var shuffled = shuffle(sortedArray);
    return {
        name: "" + shuffled.toString(),
        input: shuffled,
        output: sortedArray
    };
}
exports.generateSortingTest = generateSortingTest;
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}
//# sourceMappingURL=sortingTests.js.map