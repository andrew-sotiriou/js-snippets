import { addExampleValueToElement as addValue, processAJAXCalls as procCall } from '../writeValues.js';

//JQUERY AJAX

//GET CALL
$.ajax({
	url:"https://restcountries.eu/rest/v2/name/cyprus",
	type: "GET",
	dataType: 'json'
}).done(function(data){
	procCall(data, "country", "jquery-ajaxget-container");
}).fail(function(error){
	addValue(`${error.responseJSON.status} ${error.responseJSON.message}`, "jquery-ajaxget-container");
});