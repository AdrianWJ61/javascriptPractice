"use strict";

/** edabit challenge: https://edabit.com/challenge/MXChCnzCSBobgY4Ex
 *
 * Fix the Error: Flattening an Array
 * 
 * I'm trying to write a function to flatten an array of subarrays into one array. 
 * (Suppose I am unware there is a .flat() method in the Array prototype). 
 * In other words, I want to transform this: [[1, 2], [3, 4]] into [1, 2, 3, 4].
 */

function flatten(arr) {
    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
      arr2 = arr2.concat(arr[i]);
    }
    return arr2; 
  }
  

// Run tests cases
console.log(`Original array is [[1, 2], [3, 4]] - Flatened array =`);
console.log(flatten([[1, 2], [3, 4]]));
console.log(`Original array is [['a', 'b'], ['c', 'd']]- Flatened array =`);
console.log(flatten([['a', 'b'], ['c', 'd']]));
console.log(`Original array is [[true, false], [false, false]] - Flatened array =`);
console.log(flatten([[true, false], [false, false]]));