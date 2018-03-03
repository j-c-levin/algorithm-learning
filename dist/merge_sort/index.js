"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function mergeSort(input) {
    if (input.length === 1) {
        return input;
    }
    return input;
}
exports.mergeSort = mergeSort;
function merge(inputA, inputB) {
    var output = [];
    while (inputA.length > 0 && inputB.length > 0) {
        var temp = inputA[0] > inputB[0] ? inputB.splice(0, 1) : inputA.splice(0, 1);
        output.push(temp);
    }
    return output;
}
//# sourceMappingURL=index.js.map