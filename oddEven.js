
function isEven(number){
  // if (.isString(number)) {
  if (typeof(number)== "string"){
  console.log(number + " is not a number!")
} else if (number % 2 == 0) {
  console.log(number + " is even!")
} else {
  console.log(number + " is odd!")
};
}

isEven("bruna");