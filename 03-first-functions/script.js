// TODO: implement welcomeMsg function

function welcomeMsg(name) {
  console.log("Welcome " + name + "!");
}
console.log(welcomeMsg("Jane"));

console.log(welcomeMsg("Marc"));

// TODO: implement calcGrossPrice function

function calcGrossPrice(price, taxRate) {
  return price * (taxRate + 1);
}

console.log(calcGrossPrice(20, 0.19));
// result should be 23.8

console.log(calcGrossPrice(40, 0.16));
// result should be 46.4

// TODO: Implement the addPositive function
function addPositive(num1, num2) {
  const positiveNum1 = Math.abs(num1);
  const positiveNum2 = Math.abs(num2);

  return positiveNum1 + positiveNum2;
}

console.log(addPositive(2, 3));
// result1 should be 5

console.log(addPositive(3, -5));
// result2 should be 8

console.log(addPositive(-1, -8));
// result2 should be 9

console.log(addPositive(-40, -60));
