export function insertionSort(input: Number[]): Number[] {
  for (let i = 0; i < input.length; i++) {
    let currentIndex = i;
    // Work each element back in the array until it is next to a smaller element
    while (input[currentIndex] < input[currentIndex - 1]) {
      let temp = input[currentIndex - 1];
      input[currentIndex - 1] = input[currentIndex];
      input[currentIndex] = temp;
      currentIndex -= 1;
    }
  }
  return input;
}