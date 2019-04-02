import { updatePreES6Element, updatePostES6Element } from './writeValues.js'

//const arrayElementId = "array-map-container";

//Arrays
//.MAP
const numbers = [1, 2, 3, 4, 5];
const squareNumbersPre = numbers.map(number => { return number * number; });
const squareNumbersPost = numbers.map(number => number * number);

updatePreES6Element(squareNumbersPre, "array-map-container");
updatePostES6Element(squareNumbersPost, "array-map-container");

//.FILTER
const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];
"array-filter-container"
const onlyNumbersPre = things.filter(thing => { return typeof thing === 'number'; });
const onlyNumbersPost = things.filter(thing => typeof thing === 'number');
updatePreES6Element(onlyNumbersPre, "array-filter-container");
updatePostES6Element(onlyNumbersPost, "array-filter-container");