"use strict";

/** edabit challenge: https://edabit.com/challenge/rgdT9sZ4QhsKhaSw9?practice=true
 *
 * Find the Missing Number
 * Create a function that takes an array of numbers between 1 and 10 (excluding one number) 
 * and returns the missing number.
*/


function missingNum(arr) {
	let missing = 1;
	arr.sort(function(a,b){return a - b});
	for (let x = 0; x < 10;x++) {
		if (missing !== arr[x]) {
			return missing;
		}
		missing++;
	}
	return "No missing number found";
}


// Run tests cases
for (let i = 1; i < 6; i++){
	let numArray;
	switch (i){
		case 1:
			// true
			numArray = [1, 2, 3, 4, 6, 7, 8, 9, 10];
			break;
		case 2:
			// false
			numArray = [7, 2, 3, 6, 5, 9, 1, 4, 8];
			break;
		case 3:
			// false
			numArray = [7, 2, 3, 9, 4, 5, 6, 8, 10];
			break;
		case 4:
			// false
			numArray = [10, 5, 1, 2, 4, 6, 8, 3, 9];
			break;
		case 5:
			// true
			numArray = [1, 7, 2, 4, 8, 10, 5, 6, 9];
			break;     
		}
	console.log(`Missing number from array [${numArray}] = ${missingNum(numArray)}`);
	}