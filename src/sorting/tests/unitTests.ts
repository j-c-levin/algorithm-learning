interface SortingTest {
  name: string;
  input: Number[];
  output: Number[];
}

export const extremesTesting: SortingTest[] = [
  {
    name: "no items",
    input: [],
    output: []
  },
  {
    name: "single item",
    input: [1],
    output: [1]
  },
  {
    name: "two items",
    input: [2, 1],
    output: [1, 2]
  },
  {
    name: "already in order",
    input: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  },
  {
    name: "reversed",
    input: [9, 8, 7, 6, 5, 4, 3, 2, 1],
    output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  },
  {
    name: "multiple of same number",
    input: [2, 1, 2, 1, 3],
    output: [1, 1, 2, 2, 3]
  }
];

export function generateSortingTest(): SortingTest {
  const sortedArraySize = 30;
  const sortedArray = [];
  for (let i = 0; i < sortedArraySize; i++) {
    sortedArray.push(Math.floor(Math.random() * Number.MAX_VALUE));
  }
  sortedArray.sort((a, b) => {
    if (a === b) {
      return 0;
    }
    return a > b ? 1 : -1;
  });
  const shuffled = shuffle(sortedArray);
  return {
    name: `${shuffled.toString()}`,
    input: shuffled,
    output: sortedArray
  };
}

function shuffle(array): Number[] {
  const copy = JSON.parse(JSON.stringify(array));
  let currentIndex = copy.length,
    temporaryValue,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = copy[currentIndex];
    copy[currentIndex] = copy[randomIndex];
    copy[randomIndex] = temporaryValue;
  }

  return copy;
}
