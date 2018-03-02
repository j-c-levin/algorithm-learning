export function bubbleSort(input: Number[]): Number[] {
  let shouldContinue = true;
  // Loop until satisfied everything is in order
  while (shouldContinue) {
      // If we get through the entire array without moving anything, the array is in order
      shouldContinue = false;
    for (let i = 0; i < input.length - 1; i++) {
      let temp,
        current = input[i],
        next = input[i + 1];
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
