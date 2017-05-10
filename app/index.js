'use strict'
const words = function(word) {
	word = word.split(/\s+/);
	const counter = function(x,list){
		var count = 0
		for (let i in list){
			if (list[i] == x){
				count += 1;
			}
		}
		return(count);
	};
	let solution = {};
	for (let j in word){
		solution[word[j]] = counter(word[j],word);
		};
	return(solution);
}

module.exports = words