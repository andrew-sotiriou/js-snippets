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
let fetchURL = "https://taco-randomizer.herokuapp.com/random/";
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
let fetchPOSTurl = "https://reqres.in/api/users";

let fetchPostData = {
    method: 'POST',
    body: {
		name: "Bilbo Baggins",
		movies: ["Fellowship of the Ring"]
	}
}
fetch(fetchPOSTurl, fetchPostData)
.then(response => {
	return response.json();
},
networkError => { procCall(networkError.message, "createUser", "ajax-fetchpost-container"); })
.then(data => {
	procCall(data, "createUser", "ajax-fetchpost-container");
})
.catch(error => {
	addValue(error, "ajax-fetchpost-container");
});

//Fetch ASYNC/AWAIT

const fetchAsync = async (fetchAsynURL) => {
	const response = await fetch(fetchAsynURL);
	if (!response.ok) {
		throw new Error('Request failed!');
	}
	const data = await response.text();
	return data;
};

fetchAsync('https://numbersapi.com/random/trivia')
.then(data => {
	procCall(data, "numbers", "ajax-asyncawait-container");
})
.catch(error => {
	addValue(error, "ajax-asyncawait-container");
});


//Fetch ASYNC/AWAIT POST
const fetchAsyncPOST = async (fetchAsyncPOSTURL, options) => {
	const response = await fetch(fetchAsyncPOSTURL, options);
	if (!response.ok) {
		throw new Error('Request failed!');
	}
	const data = await response.json();
	return data;
};

let postOptions = {
    method: 'POST',
    body: {
		name: "Geddy Lee",
		bands: ["RUSH"]
	}
};

fetchAsyncPOST('https://reqres.in/api/users', postOptions)
.then(data => {
	procCall(data, "createUser", "ajax-asyncawaitpost-container");
})
.catch(error => {
	addValue(error, "ajax-asyncawaitpost-container");
});