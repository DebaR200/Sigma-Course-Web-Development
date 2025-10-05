console.log("I am a conditional tutorial");

let age = 45;

let grace = 2;

age += grace;
console.log(age);

// console.log(age + grace);
// console.log(age - grace);
// console.log(age * grace);
// console.log(age / grace);
// console.log(age ** grace);
// console.log(age % grace);

if (age > 18) {
  console.log("You can drive");
} else if (age == 0) {
  console.log("Are you kidding");
} else if (age == 1) {
  console.log("Are you again kidding");
} else {
  console.log("You cannot drive");
}

let a = 5;
let b = 8;

let c = a > b ? a - b : b - a;
console.log(c);
