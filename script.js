'use strict';

function repeat(fn,n) {
  for (let i=0; i<n;i++) {
    fn();
  }
}

function hello() {
  console.log('hello world');
}

function goodbye() {
  console.log('goodbye world');
}

//repeat(hello,5);
//repeat(goodbye,5);

function filter(arr, fn) {
  const newArr = [];
  for (let i = 0; i<arr.length; i++) {
    if (fn(arr[i])===true){
      newArr.push(arr[i]);
    }
  }
  return newArr;
  // TASK: Define your function here
}

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
//const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
//const filteredNames = filter(myNames, (name) => name[0] === 'R');

//console.log(filteredNames) // => ['Rich', 'Ray']

// <---- DO NOT EDIT BETWEEN THESE LINES


function hazardWarningCreator(typeOfWarning) {
  let warningCounter = 0;

  return function(location) {
    warningCounter++;
    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
    if (warningCounter === 1) {
      console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time today!`);
    }
    else {
      console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} times today!`);
    }
  }
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const floodWarning = hazardWarningCreator('Water everywhere guys!!!!');
const fireWarning = hazardWarningCreator('It\'s hot ya\'ll');
rocksWarning('Pacific Ocean');
rocksWarning('Los Angeles');
floodWarning('Michigan');
floodWarning('Carlsbad');
floodWarning('North Carolina');
/*fireWarning('It\'s REALLY hot ya\'ll');
fireWarning('It\'s LIKE DANG HOT hot ya\'ll');
fireWarning('It\'s  -what are you doing outside- hot ya\'ll');
*/