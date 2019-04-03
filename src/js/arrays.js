import { addExampleValueToElement as addValue } from './writeValues.js'

//Arrays
//.MAP
const mapNumbers = [1, 2, 3, 4, 5];
let mapValue = mapNumbers.map(number => number * number);
addValue(mapValue, "array-map-container");

//.FILTER
const filterThings = ['desk', 'chair', 5, 'backpack', 3.14, 100];
let filterOnlyNumbers = filterThings.filter(thing => typeof thing === 'number');
addValue(filterOnlyNumbers, "array-filter-container");

//.REDUCE
//example 1:
const reduceNameArray = ['adam', 'nancy', 'damain', 'ramona', 'evan', 'wendy'];
let reduceValue = reduceNameArray.reduce((acc, currVal) => { return acc + currVal[0] }, "");
reduceValue = reduceValue.charAt(0).toUpperCase() + reduceValue.slice(1);
addValue(reduceValue, "array-reduce-container");

//example 2:
const reduceNums = [1, 2, 3, 4,];
let reduceSum = reduceNums.reduce((acc, val) => acc + val, 1);
addValue(reduceSum, "array-reduce-container","example-output2");

//FOREACH
let foreachNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
foreachNums.forEach( (num, i, array) => {if (num%2 == 0) array.splice(i,1)});
addValue(foreachNums, "array-foreach-container");

//EVERY
const everyNums = [1, 50, 75, 200, 350, 525, 1000];
let everyNumsValue = everyNums.every(num => num > 0);	
addValue(everyNumsValue, "array-every-container");

//SORT
let sortNames = ["Stuart", "Mark", "Bob", "Dave", "Phil", "John", "Tim", "Jerry", "Carl", "Kevin",];
sortNames.sort();
addValue(sortNames, "array-sort-container");
sortNames.reverse();
addValue(sortNames, "array-sort-container", "example-output1-reversed");

let sortNums = [23, 22, 4, 16, 8, 42, 15];
sortNums.sort((a, b) => a - b);
addValue(sortNums, "array-sort-container", "example-output2");

//Check Arrays for Non-Dups
const nondupsList1 = [1,2,3,4,5,6,7];
const nondupsList2 = [1,2,3,4];
let nondupsMatchLoop = []; 

for(var k=0; k<nondupsList1.length; k++){
	if(nondupsList2.indexOf(nondupsList1[k])==-1) {
		nondupsMatchLoop.push(nondupsList1[k]);
	}
}

let nondupsMatchFilter = nondupsList1.filter(val => !nondupsList2.includes(val));
addValue(nondupsMatchLoop, "array-nondups-container");
addValue(nondupsMatchFilter, "array-nondups-container", "example-output2");