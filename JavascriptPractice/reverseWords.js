"use strict";

function reverseWordsAndLetters(str) {
    let reversedWords =  str.split(' ').reverse();
    console.log(reversedWords.join(' '));
    let lettersWordsReversed = [];
    for (let x = 0; x <= reversedWords.length-1; x++){
        let currentWord = reversedWords[x];
        lettersWordsReversed[x] = currentWord.split('').reverse().join('');
    }
    return lettersWordsReversed.join(' ');
  }
  
  
  console.log(reverseWordsAndLetters("Reverse this sentence so words are reversed"));  