import { createImg, createParagraph, createDiv } from './createElements.js';

function addExampleValueToElement(value, elementID, elementClass = "example-output") {
	let writeToElement = document.getElementById(elementID).getElementsByClassName(elementClass)[0];
	writeToElement.innerHTML = value;
}

function processAJAXCalls(object, apiType, elementID, elementClass = "example-output") {	
	let valueToWrite;
	switch(apiType) {
		case "norris":
		valueToWrite = getNorrisJoke(object);
		break;
		case "taco":
		valueToWrite = getTaco(object);
		break;
		case "createUser":
		valueToWrite = getUserInfo(object);
		break;
		case "numbers":
		valueToWrite = getNumbers(object);
		break;
		case "country":
		valueToWrite = getCountryInfo(object);
		break;
		case "register":
		valueToWrite = getRegsiterToken(object);
		break;
		default:
		valueToWrite = objectToString(object);
	};
	let writeValue = document.getElementById(elementID).getElementsByClassName(elementClass)[0];
	writeValue.appendChild(valueToWrite);
}

function objectToString(object) {
	let objectToString = JSON.stringify(object);
	return objectToString;
}

function getNorrisJoke(object) {
	let divTag = createDiv("response-container");
	let norrisImg = createImg(object.icon_url);
	let norrisJoke = createParagraph(object.value);
	divTag.appendChild(norrisImg);
	divTag.appendChild(norrisJoke);
	return divTag;
}

function getTaco(object){
	let taco = `${object.shell.name}, ${object.base_layer.name}, ${object.condiment.name}, ${object.mixin.name}, and ${object.seasoning.name}`;
	let tacoTag = createParagraph(taco);
	return tacoTag;
}

function getUserInfo(object){
	let userInfo = `The user's id is ${object.id} and the user was created on ${object.createdAt}`;
	let userInfoParagraph = createParagraph(userInfo);
	return userInfoParagraph;
}

function getNumbers(string){
	let numbersParagraph = createParagraph(string);
	return numbersParagraph;
}

function getCountryInfo(object){
	let divTag = createDiv("response-container");
	let flagImg = createImg(object[0].flag);
	let countryText = `The country is ${object[0].name} and the capital is ${object[0].capital}`;
	let contryInfo = createParagraph(countryText);
	divTag.appendChild(flagImg);
	divTag.appendChild(contryInfo);
	return divTag;
}

function getRegsiterToken(object){
	let regsiterToken = createParagraph(`The register token is ${object.token}`);
	return regsiterToken;
}

export {addExampleValueToElement, processAJAXCalls};