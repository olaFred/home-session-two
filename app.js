var checkWeather = require("./index.js");
 	var processData = process.argv.slice(2);
 	var solution = [];

 	processData.forEach(function(value) {
 		solution.push(value);
 	});


checkWeather.checkWeather(solution[0],solution[1]);