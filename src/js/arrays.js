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
//example 1
const nameArray = ['adam', 'nancy', 'damain', 'ramona', 'evan', 'wendy'];
let newNamePre = nameArray.reduce((acc, currVal) => { return acc + currVal[0] }, "");
newNamePre = newNamePre.charAt(0).toUpperCase() + newNamePre.slice(1);
updatePreES6Element(newNamePre, "array-reduce-container");

//example 2:
// pre-es6-output.example2
const reduceNums = [1, 2, 3, 4,];
let reduceSumPre = reduceNums.reduce((acc, val) => { return acc + val; }, 0);
let reduceSumPost = reduceNums.reduce((acc, val) => acc + val, 1);
updatePreES6Element(reduceSumPre, "array-reduce-container", "pre-es6-output-example2");
updatePreES6Element(reduceSumPost, "array-reduce-container","post-es6-output-example2");