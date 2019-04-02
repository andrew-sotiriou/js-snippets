import { updatePreES6Element, updatePostES6Element } from './writeValues.js'

//const arrayElementId = "array-map-container";

//Arrays
//.MAP
const numbers = [1, 2, 3, 4, 5];
let squareNumbersPre = numbers.map(number => { return number * number; });
let squareNumbersPost = numbers.map(number => number * number);
updatePreES6Element(squareNumbersPre, "array-map-container");
updatePostES6Element(squareNumbersPost, "array-map-container");

//.FILTER
const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];
let onlyNumbersPre = things.filter(thing => { return typeof thing === 'number'; });
let onlyNumbersPost = things.filter(thing => typeof thing === 'number');
updatePreES6Element(onlyNumbersPre, "array-filter-container");
updatePostES6Element(onlyNumbersPost, "array-filter-container");

//.REDUCE
//example 1:
const nameArray = ['adam', 'nancy', 'damain', 'ramona', 'evan', 'wendy'];
let newNamePre = nameArray.reduce((acc, currVal) => { return acc + currVal[0] }, "");
newNamePre = newNamePre.charAt(0).toUpperCase() + newNamePre.slice(1);
updatePreES6Element(newNamePre, "array-reduce-container");

//example 2:
const reduceNums = [1, 2, 3, 4,];
let reduceSumPre = reduceNums.reduce((acc, val) => { return acc + val; }, 0);
let reduceSumPost = reduceNums.reduce((acc, val) => acc + val, 1);
updatePreES6Element(reduceSumPre, "array-reduce-container", "pre-es6-output-example2");
updatePostES6Element(reduceSumPost, "array-reduce-container","post-es6-output-example2");

//FOREACH
const foreachNumsPre = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
foreachNumsPre.forEach(function(num, i, array) {
	if (num%2 == 0){
		array.splice(i,1);
	}
});
const foreachNumsPost = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
foreachNumsPost.forEach( (num, i, array) => {if (num%2 == 0) array.splice(i,1)});
updatePreES6Element(foreachNumsPre, "array-foreach-container");
updatePostES6Element(foreachNumsPost, "array-foreach-container");