module.exports = function toReadable (number) {
	if(number === 0) return 'zero';
	
	const arrNumeral = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
	const arrTens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
	
	const result = [];

	const arrStrFromNumber = [String(number)];
	
	for (let i = 0; i < arrStrFromNumber.length; i++) {
		
		let ints = arrStrFromNumber[i].split('').reverse().map(parseFloat);
		
		if (ints[1] === 1) {
			ints[0] += 10;
		}
		
		if (arrNumeral[ints[0]]) {
			result.push(arrNumeral[ints[0]]);
		}

		if (arrTens[ints[1]]) {
			result.push(arrTens[ints[1]]);
		}
		
		if (arrNumeral[ints[2]]) {
			result.push(arrNumeral[ints[2]] + ' hundred');
		}
		
	}
	return result.reverse().join(' ');

}
