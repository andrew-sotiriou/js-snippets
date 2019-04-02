function updatePreES6Element(value, elementID) {
	var mapPre = document.getElementById(elementID).getElementsByClassName("pre-es6-output")[0];
	mapPre.innerHTML = value;
}

function updatePostES6Element(value, elementID, elementClass) {
	var mapPost = document.getElementById(elementID).getElementsByClassName("post-es6-output")[0];
	mapPost.innerHTML = value;
}

export {updatePreES6Element, updatePostES6Element};