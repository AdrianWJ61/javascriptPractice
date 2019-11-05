function fibonacci(num) {
    var fibPrevious = 0;
	var fibNow = 1;
	var fibCurrent = 1;
	for (x = 1;x < num+1;x++) {
	    fibCurrent = fibPrevious + fibNow;
	    fibPrevious = fibNow;
		fibNow = fibCurrent;
    }
    return fibCurrent;
}

/// This is a simple version
//function fibonacci(num) {
// 	if(num <= 1) return 1;
//     return fibonacci(num - 1) + fibonacci(num - 2);
// }

for (z = 0;z <= 20;z++) {
console.log("fibonacci(" + z + ") = " + fibonacci(z));
}