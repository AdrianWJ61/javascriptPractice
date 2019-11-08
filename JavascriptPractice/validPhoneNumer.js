"use strict";

/**
 * edabit challenge: https://edabit.com/challenge/nHaKL55KwW3XaGrAw?practice=true
 * 
 * Is the Phone Number Formatted Correctly?
 * 
 * Create a function that accepts a string and returns true if it's in the format of a proper 
 * phone number and false if it's not. Assume any number between 0-9 (in the appropriate spots) 
 * will produce a valid phone number. This is what a valid phone number looks like: (123) 456-7890
 */


function isValidPhoneNumber(str) {
    let validNumber = /\(\d{3,3}\)\s\d{3,3}\-\d{4,4}/;
    let valid =  str.match(validNumber); 
    if (valid == null || valid[0] != str){
        return false;
    }
    return true;
}


// Run tests cases
for (let i = 1; i < 15; i++){
    let num ="";
    switch (i){
        case 1:
            // true
            num = "(123) 456-7890";
            break;
        case 2:
            // false
            num = "(1111)555 2345";
            break;
        case 3:
            // false
            num = "(098) 123 4567";
            break;
        case 4:
            // false
            num = "(123)456-7890";
            break;
        case 5:
            // true
            num = "abc(123)456-7890";
            break;             
        case 6:
            // false
            num = "(123)456-7890abc";
            break;
        case 7:
            // false
            num = "abc(123)456-7890abc";
            break;
        case 8:
            // false
            num = "abc(123) 456-7890";
            break;
        case 9:
            // false
            num = "(123) 456-7890abc";
            break; 
        case 10:
            // false
            num = "abc(123) 456-7890abc";        
            break;    
        case 11:
            // false
            num = "(123)-456-7890";
            break;    
        case 12:
            // false
            num = "(123)_456-7890";
            break;    
        case 13:
            // false
            num = "-123) 456-7890";
            break;
        case 14:
            // false
            num = "(519) 505-6498";
            break;     
    }
console.log(`Phone number valid? = ${isValidPhoneNumber(num)}`);
}