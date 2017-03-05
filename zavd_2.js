const PI = function p () {
	var max = 7, A = 0, n = 1, i = 3;
	while (i <= max) {
		A += (Math.pow(-1, n + 1) * 4) / (2 * n - 1);
		if (A.toFixed(i) == Math.PI.toFixed(i)) {
			console.log(n + ' tochnist do ' + i);
			i += 2;
		}

		n++;
	}
}

PI();