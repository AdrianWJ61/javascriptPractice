"use strict";

/** edabit challenge: https://edabit.com/challenge/wPNzJEJebN2mewcqY?practice=true
 * 
 * Reverse the Order of Words with Five Letters or More
 * Write a function that takes a string of one or more words as an argument and returns the same string, 
 * but with all five or more letter words reversed. Strings passed in will consist of only letters and 
 * spaces. Spaces will be included only when more than one word is present.
 */


function reverse(str) {
    let splitWords = str.split(' ');
    for (let x = 0;x < splitWords.length;x++) {
        let checkWordLength = splitWords[x];
        if (checkWordLength.length >= 5) {
            splitWords[x] = checkWordLength.split('').reverse().join('');
        }
    }
    return splitWords.join(' ');
}


// Run tests cases
for (let i = 1; i < 11; i++){
    let wordsToReverse ="";
        switch (i){
    
            case 1:
                // true
                wordsToReverse = "Reverse";
                break;
            case 2:
                // false
                wordsToReverse = "This is a typical sentence.";
                break;
            case 3:
                // false
                wordsToReverse = "The dog is big.";
                break;
            case 4:
                // false
                wordsToReverse = "Reverse the order of every word greater than or equal to five characters.";
                break;
            case 5:
                // true
                wordsToReverse = "Lets all be unique together until we realise we are all the same.";
                break;             
            case 6:
                // false
                wordsToReverse = "The old apple revels in its authority.";
                break;
            case 7:
                // false
                wordsToReverse = "The shooter says goodbye to his love.";
                break;
            case 8:
                // false
                wordsToReverse = "Please wait outside of the house.";
                break;
            case 9:
                // false
                wordsToReverse = "Two seats were vacant.";
                break; 
            case 10:
                // false
                wordsToReverse = "Sixty-Four comes asking for bread.";        
                break;    
        }
    console.log(`Original word order = "${wordsToReverse}"`);    
    console.log(`    Reversing words of 5 or more characters = "${reverse(wordsToReverse)}"`);
    console.log("");
    }