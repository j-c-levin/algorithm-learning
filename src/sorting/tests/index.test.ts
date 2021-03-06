import { describe, it } from "mocha";
import { expect } from "chai";
import { bubbleSort } from "../bubble_sort/index";
import { extremesTesting, generateSortingTest } from "./unitTests";
import { insertionSort } from "../insertion_sort/index";
import { heapSort } from '../heap_sort/index';
import { mergeSort } from "../merge_sort/index";

interface Algorithm {
  name: string;
  sort: Sorter;
}

export interface Sorter {
  (input: Number[]): Number[]
}

const numberOfGenerations = 100;

const algorithms: Algorithm[] = [
  {
    name: "bubble sort",
    sort: bubbleSort
  },
  {
    name: "insertion sort",
    sort: insertionSort
  },
  {
    name: "heap sort",
    sort: heapSort
  },
  {
    name: "merge sort",
    sort: mergeSort
  }
];

describe("Sorting algorithms", function() {
  algorithms.forEach(algorithm => {
    // Label each set of tests correctly
    describe(algorithm.name, function() {
      // Test specific extreme cases of sorting
      extremesTesting.forEach(test => {
        // Copy so that each test remains unordered to begin with
        const copy = JSON.parse(JSON.stringify(test));
        it(copy.name, function() {
          const output = algorithm.sort(copy.input);
          expect(output).to.deep.equal(copy.output);
        });
      });
      // Throw randomly generated orderings at the sorting algorithm
      for (let i = 0; i < numberOfGenerations; i++) {
        const test = generateSortingTest();
        it(test.name, function() {
          const output = algorithm.sort(test.input);
          expect(output).to.deep.equal(test.output);
        });
      }
    });
  });
});