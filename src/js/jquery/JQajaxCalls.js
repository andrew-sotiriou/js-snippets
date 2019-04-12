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


//Updated GET CALL
$.get('https://restcountries.eu/rest/v2/name/france', data => {
    procCall(data, "country", "jquery-updatedget-container");
}).fail( error => {
	addValue(`${error.responseJSON.status} ${error.responseJSON.message}`, "jquery-updatedget-container"); 
});

//GET JSON CALL

$.getJSON("https://api.funtranslations.com/translate/klingon.json?", {
	text: "Hello. My name is Inigo Montoya. You killed my father. Prepare to die."
}).done(data => {
	procCall(data, "klingon", "jquery-getjson-container");
}).fail(error => {
	addValue(`${error.responseJSON.status} ${error.responseJSON.message}`, "jquery-getjson-container");
});

//POST CALL
let JQPostData = {
	email: "bravelittletoaster@cabin.com",
	password: "robtheowner"
};

$.ajax({
	url: "https://reqres.in/api/register",
	type: "POST",
	dataType: 'json',
	data: JQPostData,
}).done(data => {
	procCall(data, "register", "jquery-post-container");
}).fail(error => {
	addValue(`${error.responseJSON.status} ${error.responseJSON.message}`, "jquery-post-container"); 
});
