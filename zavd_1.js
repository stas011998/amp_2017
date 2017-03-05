const isPal = function pal (num) 
{
	var inverted = 0;
	var temp = num;
	
	while (temp != 0) {
		inverted = inverted * 10 + temp % 10;
		temp = parseInt(temp / 10);
	}
	if ( num === inverted) console.log("palindrom");
	else console.log("Ne palindrom");
};	

var num = 34521;
isPal(num);