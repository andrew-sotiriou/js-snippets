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
	var pText = document.createTextNode(text);
	pTag.appendChild(pText);
    return pTag;
}

function createDiv(className = "response-container"){
	var	divTag = document.createElement("div");
	divTag.setAttribute("class", className);
    return divTag;
}

export {createImg, createParagraph, createDiv};