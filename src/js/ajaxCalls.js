import { processAJAXCalls as addValue } from './writeValues.js'
//import jQuery from 'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js'

//Original AJAX:
const xhr = new XMLHttpRequest;
const url = "https://api.chucknorris.io/jokes/random";
xhr.responseType = "json";
xhr.onreadystatechange = function() {
	if (xhr.readyState === XMLHttpRequest.DONE) {
		if (xhr.status === 200) {
			addValue(xhr.response, "norris", "ajax-original-container");
		}
		else {
			return `Error ${xhr.status}`;
		}
	}
};

xhr.open('GET', url, true);
xhr.send();