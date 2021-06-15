const howManyHundreds = function(num) {
  const numHundredth = num / 100;
  const boxes = Math.floor(numHundredth);
  return boxes;
}

const howManyHundredsAlt = function(num) {
  const leftovers = num % 100;
  const roundedNum = num - leftovers;
  const boxes = roundedNum / 100;
  return boxes;
}

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);

console.log(howManyHundredsAlt(1000), "=?!", 10);
console.log(howManyHundredsAlt(894), "=?!", 8);
console.log(howManyHundredsAlt(520), "=?!", 5);
console.log(howManyHundredsAlt(99), "=?!", 0);
console.log(howManyHundredsAlt(0), "=?!", 0);