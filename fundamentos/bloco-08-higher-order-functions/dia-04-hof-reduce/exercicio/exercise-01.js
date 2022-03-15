const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten(arr) {
  return arr.reduce((acc, item) => acc.concat(item),[])
}

console.log(flatten(arrays));

