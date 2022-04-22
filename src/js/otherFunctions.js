import { addExampleValueToElement as addValue } from './writeValues.js';

//Get Age     
function getAge (bday){
  var today = new Date();
  var birthDate = new Date(bday);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
  }
  addValue(age, 'other-age-container');
}
getAge('01/01/1980');

//Validate Name
function checkName(name){  
  var regex = /^[a-zA-x]{2,30}$/;
  if( !((name != null && name != undefined) && regex.test(name)) ){
  	addValue('Invalid Name', 'other-name-container');
  }
  else {
  	addValue('Valid Name', 'other-name-container');
  }
}
checkName('andrew');

//URL Check
function checkURL(url){
	var regex = /^(ftp|http|https):\/\/[^ "]+$/;
	if ( !((url != null && url != undefined) && regex.test(url)) ) {
		addValue('Invalid URL', 'other-url-container');
	}
	else {
		addValue('Valid URL', 'other-url-container');
	} 
}
checkURL('http://www.google.com');

function factorial(x) {
  if (x < 0) return;
  if (x === 0) return 1;
  return x * factorial(x - 1);
}
addValue(factorial(3), 'factorial-container');

function revStr(str){
  if (str === '') return '';
  return revStr(str.substr(1)) + str[0];
}
addValue(revStr('cat'), "reverse-container");

let multiSizes =  '360x300,360x310,338x280,300x250,320x50';
function getSize(multiSizes) {
  const sizes = multiSizes.split(',').reduce((acc, currVal) => {
    if (Object.entries(acc).length === 0) {
      const current = currVal.split('x');
      acc.push(current[0], current[1]);
    } else {
      const current = currVal.split('x');
      acc[0] = Number(acc[0]) > Number(current[0]) ? acc[0] : current[0];
      acc[1] = Number(acc[1]) > Number(current[1]) ? acc[1] : current[1];
    }
    return acc;
  }, []);
  return sizes.join('x');
}

addValue(getSize(multiSizes),"largest-size-container");