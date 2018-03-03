export function mergeSort(input: Number[]): Number[] {
    if (input.length === 1) {
        return input;
    }
  return input;
}

function merge(inputA: Number[], inputB: Number[]): Number[] {
  const output = [];
  while (inputA.length > 0 && inputB.length > 0) {
    const temp =
      inputA[0] > inputB[0] ? inputB.splice(0, 1) : inputA.splice(0, 1);
    output.push(temp);
  }
  return output;
}
