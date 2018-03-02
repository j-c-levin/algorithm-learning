"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mocha_1 = require("mocha");
var chai_1 = require("chai");
var index_1 = require("../bubble_sort/index");
var unitTests_1 = require("./unitTests");
var index_2 = require("../insertion_sort/index");
var index_3 = require("../heap_sort/index");
var numberOfGenerations = 100;
var algorithms = [
    {
        name: "bubble sort",
        sort: index_1.bubbleSort
    },
    {
        name: "insertion sort",
        sort: index_2.insertionSort
    },
    {
        name: "heap sort",
        sort: index_3.heapSort
    }
];
mocha_1.describe("Sorting algorithms", function () {
    algorithms.forEach(function (algorithm) {
        // Label each set of tests correctly
        mocha_1.describe(algorithm.name, function () {
            // Test specific extreme cases of sorting
            unitTests_1.extremesTesting.forEach(function (test) {
                mocha_1.it(test.name, function () {
                    var output = algorithm.sort(test.input);
                    chai_1.expect(output).to.deep.equal(test.output);
                });
            });
            var _loop_1 = function (i) {
                var test = unitTests_1.generateSortingTest();
                mocha_1.it(test.name, function () {
                    var output = algorithm.sort(test.input);
                    chai_1.expect(output).to.deep.equal(test.output);
                });
            };
            // Throw randomly generated orderings at the sorting algorithm
            for (var i = 0; i < numberOfGenerations; i++) {
                _loop_1(i);
            }
        });
    });
});
//# sourceMappingURL=index.test.js.map