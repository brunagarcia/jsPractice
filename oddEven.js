
function isEven(number){
  // if (typeof(number)== "string"){    => another way of doing
  // if (isNaN(number) === true){       => another other way of doing
  // if (isNaN(number)){                => Dry code
  if (Number.isInteger(number)){
  return number + " is not a number!" // we could use "is not valid
} else if (number % 2 == 0) {
  return number + " is even!"
} else {
  return number + " is odd!"
};
}

console.log(isEven(43));