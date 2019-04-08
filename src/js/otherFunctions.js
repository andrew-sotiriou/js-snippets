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