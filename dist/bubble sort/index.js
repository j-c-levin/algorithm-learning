"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function bubbleSort(input) {
    var shouldContinue = true;
    // Loop until satisfied everything is in order
    while (shouldContinue) {
        // If we get through the entire array without moving anything, the array is in order
        shouldContinue = false;
        for (var i = 0; i < input.length - 1; i++) {
            var temp = void 0, current = input[i], next = input[i + 1];
            // If the current is greater than the next, swap them
            if (current > next) {
                temp = next;
                input[i + 1] = current;
                input[i] = temp;
                shouldContinue = true;
            }
        }
    }
    return input;
}
exports.bubbleSort = bubbleSort;
//# sourceMappingURL=index.js.map