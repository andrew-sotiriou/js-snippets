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
	let emptyPTag = createParagraph(null, "response-container");
	let norrisImg = createImg(object.icon_url);
	let norrisJoke = createParagraph(object.value);
	//norrisJoke.appendChild(norrisImg);
	emptyPTag.appendChild(norrisImg);
	emptyPTag.appendChild(norrisJoke);
	return emptyPTag;
}

function createImg(imgURL, imgAlt = null, imgTitle = null){
	let imgTag = document.createElement("img");
	imgTag.src = imgURL;
	imgTag.setAttribute("class", "image");
	imgTag.alt = imgAlt ? imgAlt : null;
	imgTag.title = imgTitle ? imgTitle : null;
	return imgTag; 
}

function createParagraph(text, className = "output-text", url = null){
	var	pTag = document.createElement("p");
	pTag.setAttribute("class", className);
	if (text != null) {
		var pText = document.createTextNode(text);
		pTag.appendChild(pText);
	}
    return pTag;
}

export {addExampleValueToElement, processAJAXCalls};