function merge(arr1, arr2) {
  let unsorted = arr1;
  for (let i = 0; i < arr2.length; i++) {
    unsorted.push(arr2[i]);
  }
  let sorted = unsorted.sort(function(a, b) {
    return a - b;
  });
  return sorted;
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);