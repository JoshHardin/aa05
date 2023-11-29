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
  for (let num of arr) {
    for (let num2 of arr) {
      if (num + num2 === target) {
        return true;
      } 
      
      }

    }
    return false;
  }
  

const secondLargest = arr => {
  let largest = -Infinity
  if (arr.length <= 1) return undefined;
  for (let num of arr) {
    if (num > largest) {
      largest = num
    }
  }
  arr.splice(arr.indexOf(largest), 1)
  let largest2 = -Infinity
  for (let number of arr) {
    if (number > largest2) {
      largest2 = number
    }
  }
  return largest2;
};

const shuffle = (arr) => {

  // Your code here
};


module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];
