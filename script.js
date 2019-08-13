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
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, (name) => name[0] === 'R');

//console.log(filteredNames) // => ['Rich', 'Ray']

// <---- DO NOT EDIT BETWEEN THESE LINES