//Drag AND Drop
const dragTurtleStart = (event) => {
	event.dataTransfer.setData("text", event.target.id);
	event.dataTransfer.dropEffect = 'move';
	event.target.style.opacity = '.5';
};

const dragTurtleEnd = (event) => {
	event.target.style.opacity = '';
};

const allowTurtleDrop = (event) =>  {
	event.preventDefault();
};

const dropTurtle = (event) => {
	event.target.style.background = '';
	event.preventDefault();
	var data = event.dataTransfer.getData("text");
	event.target.appendChild(document.getElementById(data));
};

const dragBoxEnter = (event) => {
	event.preventDefault();
	event.dataTransfer.dropEffect = 'move';
	event.target.style.background = 'orange';
};

const dragBoxLeave = (event) => {
  event.target.style.background = '';
};

const draggableItem = document.getElementById("tmnt-michelangelo");
const dropLocation1 = document.getElementById("dragbox1");
const dropLocation2 = document.getElementById("dragbox2");

draggableItem.addEventListener('dragstart', dragTurtleStart);
draggableItem.addEventListener('dragend', dragTurtleEnd);
dropLocation1.addEventListener('drop', dropTurtle);
dropLocation2.addEventListener('drop', dropTurtle);
dropLocation1.addEventListener('dragover', allowTurtleDrop);
dropLocation2.addEventListener('dragover', allowTurtleDrop);
dropLocation1.addEventListener('dragenter', dragBoxEnter);
dropLocation2.addEventListener('dragenter', dragBoxEnter);
dropLocation1.addEventListener('dragleave', dragBoxLeave);
dropLocation2.addEventListener('dragleave', dragBoxLeave);

//History API
const historyBack = document.getElementById("historyBack");
const historyForward = document.getElementById("historyForward");
const historyGo = document.getElementById("historyGo");
const historyRefresh = document.getElementById("historyRefresh");
const historyLength = document.getElementById("historyLength");
const historyReplaceState = document.getElementById("historyReplaceState");
const historyPushState = document.getElementById("historyPushState");
const historyReplacePushonPopState = document.getElementById("historyReplacePushonPopState");
const popStateData = `There is unrest in the forest 
There is trouble with the trees
For the maples want more sunlight
And the oaks ignore their pleas`;

historyBack.addEventListener("click", function() {
	window.history.back();
});

historyForward.addEventListener("click", function() {
	window.history.forward();
});

historyGo.addEventListener("click", function() {
	window.history.go(-2);
});

historyRefresh.addEventListener("click", function() {
	window.history.go();
});

historyLength.addEventListener("click", function() {
	alert(window.history.length);
});

historyReplaceState.addEventListener("click", function() {
	history.replaceState(popStateData, "title", 'rush');
});

historyPushState.addEventListener("click", function() {
	history.pushState(popStateData, "title", 'rush');
});

historyReplacePushonPopState.addEventListener("click", function() {
	history.replaceState(popStateData, "title", 'trees');
	history.pushState(popStateData, "title", 'trees');
	window.history.back();
});

window.addEventListener('popstate', function(e) {
	alert(popStateData);
});

//Vibration:
const vibrateMe = document.getElementById("vibrateMe");
const vibrateSuperMario = document.getElementById("vibrateSuperMario");
const vibrateVader = document.getElementById("vibrateVader");
const vibratePacMan = document.getElementById("vibratePacMan");

vibrateMe.addEventListener("click", function() {
	navigator.vibrate([3000, 2000, 1000]);
});

vibrateSuperMario.addEventListener("click", function() {
	navigator.vibrate([125,75,125,275,200,275,125,75,125,275,200,600,200,600]);
});

vibrateVader.addEventListener("click", function() {
	navigator.vibrate([500,110,500,110,450,110,200,110,170,40,450,110,200,110,170,40,500]);
});

vibratePacMan.addEventListener("click", function() {
	navigator.vibrate([200,150,200,150,200,150,200,300,200,150,200,150,200,150,200,300,200,150,200,150,200,150,200,150,300,150,350,150,400]);
});

//Proximity:
const proximity = document.getElementById("proximity");

proximity.addEventListener("click", function() {
	window.addEventListener('userproximity', function(event) {
		if (event.near) {
			alert('DANGER WILL ROBINSON! MOTION HAS BEEN DETECTED!');
		}
	});
});

//Storage:
