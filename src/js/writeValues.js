function addExampleValueToElement(value, elementID, elementClass = "example-output") {
	var mapPost = document.getElementById(elementID).getElementsByClassName(elementClass)[0];
	mapPost.innerHTML = value;
}

export {addExampleValueToElement};