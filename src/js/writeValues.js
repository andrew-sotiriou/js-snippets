function updatePreES6Element(value, elementID, elementClass = "pre-es6-output") {
	var mapPre = document.getElementById(elementID).getElementsByClassName(elementClass)[0];
	mapPre.innerHTML = value;
}

function updatePostES6Element(value, elementID, elementClass = "post-es6-output") {
	var mapPost = document.getElementById(elementID).getElementsByClassName(elementClass)[0];
	mapPost.innerHTML = value;
}

export {updatePreES6Element, updatePostES6Element};