import { addExampleValueToElement as addValue } from './writeValues.js'

const playObject = {
	key1: "value1",
	key2: "value2",
	key3: "value3",
	key4: "value4",
	key5: "value5"
};

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