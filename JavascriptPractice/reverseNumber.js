"use strict";

/**
 * edabit challenge: https://edabit.com/challenge/qrDWy9xS8BrfhLS6o?practice=true
 * 
 * Reverse the Number
 * Create a function that takes an integer n and reverses it.
 */ 


function rev(n) {
    let num = n.toString();
    let numReversed = num.split('').reverse().join('');
    return parseInt(numReversed);
}


// Run tests cases
for (let i = 1; i < 9; i++){
    let num ="";
    switch (i){
        case 1:
            num = 215;
            break;
        case 2:
            num = 122225;
            break;
        case 3:
            num = 215;
            break;
        case 4:
            num = -215;
            break;
        case 5:
            num = -2152;
            break;             
        case 6:
            num = -122157;
            break;
        case 7:
            num = 666;
            break;
        case 8:
            num = 999;
            break;
    }
console.log(`Result of reversing the number ${num} = ${rev(num)}`);
}