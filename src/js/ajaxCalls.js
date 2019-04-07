import { addExampleValueToElement as addValue, processAJAXCalls as procCall } from './writeValues.js';

//Original AJAX:
const xhr = new XMLHttpRequest;
const url = "https://api.chucknorris.io/jokes/random";
xhr.responseType = "json";
xhr.onreadystatechange = function() {
	if (xhr.readyState === XMLHttpRequest.DONE) {
		if (xhr.status === 200) {
			procCall(xhr.response, "norris", "ajax-original-container");
		}
		else {
			return `Error ${xhr.status}`;
		}
	}
};

xhr.open('GET', url, true);
xhr.send();

//Fetch GET
let fetchURL = "http://taco-randomizer.herokuapp.com/random/";
fetch(fetchURL)
.then(response => {
	return response.json();
},
networkError => { procCall(networkError.message, "taco", "ajax-fetch-container"); })
.then(data => {
	procCall(data, "taco", "ajax-fetch-container");
})
.catch(error => {
	addValue(error, "ajax-fetch-container");
});

//Fetch POST
/*let data = {
    name: 'Sara'
}
// The parameters we are gonna pass to the fetch function
let fetchData = { 
    method: 'POST', 
    body: data,
    headers: new Headers()
}
fetch(url, fetchData)
.then(function() {
    // Handle response you get from the server
});*/