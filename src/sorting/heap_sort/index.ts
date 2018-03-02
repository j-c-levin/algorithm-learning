let arraySpaceToSearch;

export function heapSort(input: Number[]): Number[] {
  arraySpaceToSearch = input.length - 1;
  buildMaxHeap(input);
  for (let last = input.length - 1; last >= 1; last--) {
    let temp = input[last];
    input[last] = input[0];
    input[0] = temp;
    arraySpaceToSearch -= 1;
    heapify(input, 0);
  }
  return input;
}

function buildMaxHeap(input: Number[]): void {
  for (let i = Math.floor(arraySpaceToSearch / 2); i >= 0; i--) {
    heapify(input, i);
  }
}

function heapify(input: Number[], currentIndex: number): void {
  const leftIndex = currentIndex * 2;
  const rightIndex = leftIndex + 1;

  let max =
    isInArraySpace(leftIndex) && input[leftIndex] > input[currentIndex]
      ? leftIndex
      : currentIndex;

  if (isInArraySpace(rightIndex) && input[rightIndex] > input[max]) {
    max = rightIndex;
  }

  if (max !== currentIndex) {
    let temp = input[currentIndex];
    input[currentIndex] = input[max];
    input[max] = temp;
    heapify(input, max);
  }
}

function isInArraySpace(index: Number): Boolean {
  return index <= arraySpaceToSearch && index >= 0;
}
