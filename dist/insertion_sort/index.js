"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function insertionSort(input) {
    for (var i = 0; i < input.length; i++) {
        var currentIndex = i;
        // Work each element back in the array until it is next to a smaller element
        while (input[currentIndex] < input[currentIndex - 1]) {
            var temp = input[currentIndex - 1];
            input[currentIndex - 1] = input[currentIndex];
            input[currentIndex] = temp;
            currentIndex -= 1;
        }
    }
    return input;
}
exports.insertionSort = insertionSort;
//# sourceMappingURL=index.js.map