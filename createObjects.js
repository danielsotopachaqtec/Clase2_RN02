// Create Objects
function Vecicle(name, maker) {
	this.name = name;
	this.maker = maker;
}

let car1 = new Vecicle('Fiesta', 'Ford');
let car2 = new Vecicle('Sante Fe', 'Hyundai');

console.log('Car1', car1.name);

let car = Object.create(Object.prototype, {
	name: {
		value: 'Fiesta',
		configurable: true,
		writable: true,
		enumerable: false,
	},
	maker: {
		value: 'Ford',
		configurable: true,
		writable: true,
		enumerable: true,
	},
});

console.log('Car', car.maker);

class Vehicles {
	constructor(name, maker, engine) {
		this.name = name;
		this.maker = maker;
		this.engine = engine;
	}
	start() {
		console.log('Starting...');
	}
}

let bike1 = new Vehicles('Hayabusa', 'Suzuki', '1340cc');

bike1.start();
bike1.brake = function () {
	console.log('Applying Brake...');
};
console.log('bike', bike1.engine);
bike1.brake();
console.log('bike1 Final', bike1);
