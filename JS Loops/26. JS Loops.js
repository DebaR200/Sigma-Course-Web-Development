console.log("This is the tutorial on Loops");

let a = 1;
for (let i = 0; i < 100 ; i++) {
  console.log(a + i);
}

let obj = {
  name:"Debashis",
  job : "Programmer",
  company:"Nothing"
}
for (const key in obj) {
  const element = obj[key];
  console.log(element, key);
}

for (const c of "Debashis") {
  console.log(c);
}

console.log("While Loop")
var i = 0;
while (i < 6) {
  console.log(i);
  i++;
}

function name{
  
}


var i = 4;
console.log("Do While Loop")
do {
  console.log(i);
  i++;
} while (i < 6);
