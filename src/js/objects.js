import { addExampleValueToElement as addValue } from './writeValues.js'

const playObject = {
	key1: "value",
	key2: "value",
	key3: "value",
	key4: "value",
	key5: "value"
}

//Object Keys to Array Function
function objKeyArray(object) {
	let keyArray=[];
	for (var key in object) {
		keyArray.push(key);
	}
	return keyArray;
}
addValue(objKeyArray(playObject), "object-objkey-container");

//Object Values to Array Function
function objValueArray(object) {
	let valueArray=[];
	for (var key in object) {
		valueArray.push(object[key]);
	}
	return valueArray;
}
addValue(objValueArray(playObject), "object-objvalue-container");