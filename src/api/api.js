const fetch = require('whatwg-fetch');
const myConstClass = {
	ROOT_URL: 'https://api.imgur.com/3/',
	API_KEY: '972b42d28929460'
};

console.log(myConstClass);

module.exports = window.api = {
	get: function (url) {
		return fetch(myConstClass.ROOT_URL + url, {
			headers: {
				'Authorization': 'Client-ID ' + myConstClass.API_KEY
			}
		})
		.then(function (response) {
			return response.json();
		});
	}
};