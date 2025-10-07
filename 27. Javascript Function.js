function nice(name) {
  console.log("hey ! " + name + " you are nice !");
  console.log("hey ! " + name + " you are good too");
  console.log("hey ! "+ name + " your code is looking like a wow ");
}

nice("Debashis")

function sum(a, b){
  // console.log(a + b);
  return a  + b;
}

function sum1(a, b, c = 2){
  // console.log(a + b);
  return a  + b + c;
}

function sum2(a, b, c = 2){
  console.log(a + b);
  return a  + b ;
}

let result1 = sum(3,13);
let result2 =  sum1(5,6);
let result4 =  sum1(5,6,5);
let result3 =  sum2(8);

console.log("The sum of two numbers ", result1)
console.log("The sum of two numbers ", result2)
console.log("The sum of two numbers ", result4)
console.log("The sum of two numbers ", result3)

const func = (x) => {
  console.log("I am an arrow function", x);
}

func(245);
func(458);
