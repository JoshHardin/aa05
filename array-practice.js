const findMinimum = arr => {
  let smallest = Infinity
  if (!arr.length) return undefined;
 for (let num of arr) {
  if (num < smallest) {
    smallest = num
  }
 }
 return smallest;
 }


const runningSum = arr => {
  let sum = 0;
  return arr.map(num => sum += num)
};

const evenNumOfChars = arr => {
  return (arr.filter(str => str.length %2 === 0)).length
};

const smallerThanCurr = arr => {
  return arr.map(num => arr.filter(num2 => num2 < num).length)
};

const twoSum = (arr, target) => {

  // Your code here
};

const secondLargest = arr => {

  // Your code here
};

const shuffle = (arr) => {

  // Your code here
};


module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];
