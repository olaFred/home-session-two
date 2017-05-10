'use strict'
	
	const Car = function(name,model,type) {
		// To check for instances without attributes
		if (arguments.length == 0) {
			this.name = 'General';
			this.model = 'GM';
		} else {
			this.name = name;
			this.model = model;
			this.type = type;
		};
		// Initializing speed attribute to 0 km/h
		this.speed = 0 + ' km/h';

		// Return appropriate number of doors depending on type of Car 
		if (this.name == 'Porshe' || this.name == 'Koenigsegg') {
			this.numOfDoors = 2;
		} else {
			this.numOfDoors = 4;
		};

		// Return appropriate number of wheels depending on type of Car 
		if (this.type == 'trailer') {
			this.numOfWheels = 8;
			this.isSaloon = false;
		} else {
			this.numOfWheels = 4;
			this.isSaloon = true;
		}; 

		// Create a drive method that increases speed depending on type of Car
		this.drive = function(x) {
			if (this.type != 'trailer') {
				this.speed = (x * 50);
				this.speed = this.speed + ' km/h';
			} else {
				this.speed = (x * 11);
				this.speed = this.speed + ' km/h';
			}
			return this;
		}; 
	}
	module.exports = Car
	