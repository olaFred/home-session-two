var https = require("https");

const checkWeather = function(longitude,latitude) {
	https.get("https://api.darksky.net/forecast/090f9c60a08082b3e782bbd0f91474d9/"+ longitude + "," + latitude, function(response) {
		let info = "";

		response.on("data", function(chunk){
			info += chunk;
		});

		response.on("end", function() {
			if(response.statusCode === 200) {
					try {
						var data = JSON.parse(info);
						let temperature = data.currently.temperature;
						let weather = data.currently.summary;
						let timeZone = data.timezone;
						let tomorrow = data.hourly.summary;
						let result = {
							'Location': timeZone,
							'Weather': weather,
							'Temperature': temperature,
							'tomorrowWeather': tomorrow
						}
						console.log(result);
					}catch(error) {
							console.log("Error," + error +' ocurred');
					}
			}else {
					console.log("An Error occured, please try again later");
			}
		});

	});
}

module.exports.checkWeather = checkWeather;