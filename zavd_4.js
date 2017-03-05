const splitStr = function splitString (str) {
	var regExpFloat = /\d+\.\d/, 
		regExpInt = /\d+/,
		regExpStr = /[a-zA-Z]+/;

	var strInt = '', 
		strFloat = '', 
		strText = '';

	var mas = str.split(" ");

	for (var i = 0; i < mas.length; i++) { 
		if (regExpStr.test(mas[i])) {
			strText += mas[i] + ' ';
			mas.splice(i, i + 1);
			i--;
		} 
		else if (regExpFloat.test(mas[i])) {
			strFloat += mas[i] + ' ';
			mas.splice(i, i + 1);
			i--;
		}
		else if (regExpInt.test(mas[i])) {
			strInt += mas[i] + ' ';
			mas.splice(i, i + 1);
			i--;
		}
	}

	console.log('Int: ' + strInt);
	console.log('Float: ' + strFloat);
	console.log('Text: ' + strText);
};

var str = '62.5 comp 625 1.3 windows 64';
splitStr(str);