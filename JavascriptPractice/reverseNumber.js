function rev(n) {
    let num = n.toString();
    numReversed = num.split('').reverse().join('');
    return parseInt(numReversed);
}

let number = -122157;
console.log("Result of reversing number " + number + " is " + rev(number));