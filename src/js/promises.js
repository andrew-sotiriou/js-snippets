import { addExampleValueToElement as addValue } from './writeValues.js'
import { fecthGetExport as fetchCall } from './ajaxCalls.js'

//Simple Promise
let simplePromise = new Promise((resolve, reject) => {
	let num = Math.random();
	if (num < .5 ){
		resolve('This is a successful promise and makes us happy');
	} 
	else {
		reject(new Error('This is an unsuccessful promise and makes us sad'));
	}
});

simplePromise
  .then((resolvedValue) => {
    addValue(resolvedValue, "promises-simple-container");
  })
  .catch((rejectionReason) => {
    addValue(rejectionReason, "promises-simple-container");
  });

//Promise.all

//Successful
Promise.all([
  new Promise(resolve => setTimeout(() => resolve(1), 3000)),
  new Promise(resolve => setTimeout(() => resolve(2), 2000)),
  new Promise(resolve => setTimeout(() => resolve(3), 1000))
])
.then(values => addValue(values, "promises-all-container"))
.catch(error => addValue(error, "promises-all-container")); 

//UnSuccessful
Promise.all([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
  new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
])
.then(values => addValue(values, "promises-all-container", "example-output2"))
.catch(error => addValue(error, "promises-all-container", "example-output2"));

//Promise.race
Promise.race([
  new Promise(resolve => setTimeout(() => resolve(1), 3000)),
  new Promise(resolve => setTimeout(() => resolve(2), 2000)),
  new Promise(resolve => setTimeout(() => resolve(3), 1000))
])
.then(values => addValue(values, "promises-race-container"))
.catch(error => addValue(error, "promises-race-container")); 