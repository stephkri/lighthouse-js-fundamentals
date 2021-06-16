function loopyLighthouse(range, multiples, words) {
  let normalCount = [];
  for (let i = range[0]; i <= range[1]; i++) {
    normalCount.push(i);
  }
  for (let j = normalCount[0]; j < (normalCount.length + normalCount[0]); j ++) {
    if (j % multiples[0] === 0 && j % multiples[1] === 0) {
      console.log(words[0] + words[1]);
    } else if (j % multiples[0] === 0) {
      console.log(words[0]);
    } else if (j % multiples[1] === 0) {
      console.log(words[1]);
    } else {
      console.log(j);
    }
  }
}

console.log(loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]));