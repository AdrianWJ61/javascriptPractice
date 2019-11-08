"use strict";


function palindrome(str) {
    // turn the string to lowercase
    str = str.toLowerCase().replace(/[\W_]/g,'')
    // reverse input string and return the result of the comparison
    console.log(str.split('').reverse().join(''));
    return str === str.split('').reverse().join('');
  }
  
  
  console.log(palindrome("A man, a plan, a canal. _Panama"));