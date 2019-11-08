"use strict";

/**
 * edabit challenge: https://edabit.com/challenge/TpqLBh6weuqFs9qKy?practice=true
 * 
 * The Fibonacci Number
 * 
 * Create a function that, given a number, returns the corresponding Fibonacci number. 
 */

function fibonacci(num) {
    var fibPrevious = 0;
	var fibNow = 1;
	var fibCurrent = 1;
	for (let x = 1;x < num+1;x++) {
	    fibCurrent = fibPrevious + fibNow;
	    fibPrevious = fibNow;
		fibNow = fibCurrent;
    }
    return fibCurrent;
}


// Run tests cases
for (let z = 0;z <= 20;z++) {
console.log(`Fibonacci position( ${z} ) = ${fibonacci(z)}`);
}