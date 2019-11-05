function reverse(str) {
    let splitWords = str.split(' ');
    for (x = 0;x < splitWords.length;x++) {
        let checkWordLength = splitWords[x];
        if (checkWordLength.length >= 5) {
            splitWords[x] = checkWordLength.split('').reverse().join('');
        }
    }
    return splitWords.join(' ');
}

// // Simpler solution
// function reverse(str) {
//     return str.split(' ').map(x => x.length > 4 ? x.split('').reverse().join('') : x).join(' ');
//   }

wordsToReverse = "Reverse the order of every word greater than or equal to five characters.";
console.log("Reversed words sentance: " + reverse(wordsToReverse));