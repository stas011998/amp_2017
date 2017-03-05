const fillmas = function fill (mas, min, max, l) {
	for (var i = 0; i < l; i++) 
		mas[i] = Math.floor(Math.random() * (max - min)) + min;
} 

const poisk_obmen = function po_ob (mas) {
	var max = 0;

	for (var i = 1; i < mas.l; i++) {
		if (mas[max] < mas[i]) max = i;
	}
			
	console.log('max el =  ' + mas[max]);

	var temp = mas[mas.l - 1];
	mas[mas.l - 1] = mas[max];
	mas[max] = temp;
}

var mas = [],
	min = 0,
	max = 10,
	l = 14;
		

fillmas(mas, min, max, l);
poisk_obmen(mas);