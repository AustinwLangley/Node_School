var array = process.argv;

var total = 0;

for (var i = 2; i < array.length ; i++) {
	total = total + Number(array[i]);
}

console.log(process.argv);
console.log(total);
