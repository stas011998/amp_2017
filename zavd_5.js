const sum = function s (a, b) {
	if (a >= b && b > 0) {
		return (a + sum(a, b - 1));
	}
	else if (a < b && a > 0) {
		return (b + sum(a - 1, b));
	}
	else {
		if (a > b) return b;
		else return a;
	}
}

var a = 3, 
	b = 5;

console.log('sum = ' + sum(a, b));
