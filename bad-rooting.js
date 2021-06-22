function judgeVegetable(vegetables, metric) {
  let numberArray = [];
  if (metric === "redness") {
    for (let x = 0; x < vegetables.length; x++) {
      numberArray.push(vegetables[x].redness);
    }
  } else {
    for (let x = 0; x < vegetables.length; x++) {
      numberArray.push(vegetables[x].plumpness);
    }
  }
  numberArray.sort(function(a, b) {
    return b - a;
  }); // puts array in descending order, so winner is at position 0
  if (metric === "redness") {
    for (let i = 0; i < vegetables.length; i++) {
      if (vegetables[i].redness === numberArray[0]) {
        return vegetables[i].submitter;
      }
    }
  } else {
    for (let i = 0; i < vegetables.length; i++) {
      if (vegetables[i].plumpness === numberArray[0]) {
        return vegetables[i].submitter;
      }
    }
  }
}

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'plumpness'

console.log(judgeVegetable(vegetables, metric));