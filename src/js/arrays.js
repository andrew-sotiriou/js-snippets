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
addValue(reduceSum, "array-reduce-container","example2-output");

//FOREACH
let foreachNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
foreachNums.forEach( (num, i, array) => {if (num%2 == 0) array.splice(i,1)});
addValue(foreachNums, "array-foreach-container");

//EVERY
const everyNums = [1, 50, 75, 200, 350, 525, 1000];
let everyNumsValue = everyNums.every(num => num > 0);	
addValue(everyNumsValue, "array-every-container");