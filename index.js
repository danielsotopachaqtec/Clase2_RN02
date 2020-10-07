// Clase 2 - Objectos
const objectLiteral = {};
const objectConstructor = new Object();

const employee = {
	name: 'Daniel',
	surname: 'Soto',
	career: 'Software Development',
	weapon: 'axe',
	age: 27,
	greet: function () {
		return `Hi, my name is ${this.name}`;
	},
	isStudent: false,
};
console.log('age property', employee.age);
// employee.age = 20;
employee['age'] = 60;
console.log('age property', employee.age);
employee.fight = function () {
	return `Daniel attacks with ${this.weapon}.`;
};
console.log('carrer property', employee.fight());

// . []
console.log('carrer property', employee.career);
console.log('carrer property', employee['career']);
console.log('carrer property', employee.greet());
delete employee.weapon;
console.log('object employee', employee);
// for (let key in employee) {
// 	console.log(employee[key]);
// }
for (let key in employee) {
	console.log(`${key.toUpperCase()}: ${employee[key]}`);
}
console.log('object keys', Object.keys(employee));
