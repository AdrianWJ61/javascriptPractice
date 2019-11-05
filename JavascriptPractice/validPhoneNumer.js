function isValidPhoneNumber(str) {
    let validNumber = /\(\d{3,3}\)\s\d{3,3}\-\d{4,4}/;
    let valid =  str.match(validNumber); 
    if (valid == null || valid[0] != str){
        return false;
    }
    return true;
}

// Simple version:
// function isValidPhoneNumber(str) {
// 	return /^\(\d{3}\) \d{3}-\d{4}$/.test(str);
// }

for (i = 1; i < 7; i++){
let num ="";
    switch (i){

        case 1:
            // true
            num = "(123) 456-7890";
            break;
        case 1:
            // false
            num = "abc(123)456-7890";
            break;
        case 3:
            // false
            num = "abc(123)456-7890abc";
            break;
        case 4:
            // false
            num = "abc(123) 456-7890";
            break;
        case 5:
            // false
            num = "(123) 456-7890abc";
            break;
        case 6:
            // false
            num = "abc(123) 456-7890abc";
            break;
    }
console.log(isValidPhoneNumber(num));
}