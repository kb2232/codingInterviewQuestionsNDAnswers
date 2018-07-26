
obj = {
	a: 5,
	getA: function() {
		return this.a;
	},
};
const test = {
	a: 2,
};
var get = obj.getA.bind(test);
console.log(get());
