function missingNum(arr) {
	let missing = 1;
	arr.sort(function(a,b){return a - b});
	for (x = 0; x < 10;x++) {
		if (missing !== arr[x]) {
			return missing;
		}
		missing++;
	}
	return "No missing number found";
}

console.log(missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8]));