"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var arraySpaceToSearch;
function heapSort(input) {
    arraySpaceToSearch = input.length - 1;
    buildMaxHeap(input);
    for (var last = input.length - 1; last >= 1; last--) {
        var temp = input[last];
        input[last] = input[0];
        input[0] = temp;
        arraySpaceToSearch -= 1;
        heapify(input, 0);
    }
    return input;
}
exports.heapSort = heapSort;
function buildMaxHeap(input) {
    for (var i = Math.floor(arraySpaceToSearch / 2); i >= 0; i--) {
        heapify(input, i);
    }
}
function heapify(input, currentIndex) {
    var leftIndex = currentIndex * 2;
    var rightIndex = leftIndex + 1;
    var max = isInArraySpace(leftIndex) && input[leftIndex] > input[currentIndex]
        ? leftIndex
        : currentIndex;
    if (isInArraySpace(rightIndex) && input[rightIndex] > input[max]) {
        max = rightIndex;
    }
    if (max !== currentIndex) {
        var temp = input[currentIndex];
        input[currentIndex] = input[max];
        input[max] = temp;
        heapify(input, max);
    }
}
function isInArraySpace(index) {
    return index <= arraySpaceToSearch && index >= 0;
}
//# sourceMappingURL=index.js.map