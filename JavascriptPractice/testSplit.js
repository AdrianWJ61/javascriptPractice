var test  = "This is a Test";
var splitTest = test.toLowerCase().replace(/[\W_]/g,'').split('');

console.log(test);
console.log(splitTest);