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
	var taco = `${object.shell.name}, ${object.base_layer.name}, ${object.condiment.name}, ${object.mixin.name}, and ${object.seasoning.name}`;
	let tacoTag = createParagraph(taco);
	return tacoTag;
}

export {addExampleValueToElement, processAJAXCalls};