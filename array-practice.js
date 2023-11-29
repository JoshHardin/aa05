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

  // Your code here 
};

const evenNumOfChars = arr => {

  // Your code here 
};

const smallerThanCurr = arr => {

  // Your code here 

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
