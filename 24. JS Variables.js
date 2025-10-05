console.log("CSS Varibles, Data Types and Constants");

var a = 5;
var b = 6;
console.log(a + b + 8);

let p = 10;

{
    let p = 30;
    var a = 50;
    console.log("Check if the value changes inside the braces");
    console.log(p);
    console.log(a)
}

console.log("Check if the value changes outside braces");
console.log(p);
console.log(a);

var c = "Harry";
console.log(typeof a, typeof b, typeof c);

let q = null;
let w =  6.6;
let r = 10;
const m = true;
let n =  undefined;
let s =  "Debashis";

console.log(q, w, r, m, n, s);
console.log(typeof q, typeof w, typeof r, typeof m, typeof n, typeof s);

// Objects are the key-value pairs in javascript
o = {
    name:"Debashis",
    "job code": 5600,
    is_benched:true
}

console.log(o);
o.salary = "100crores"
console.log(o);
o.salary = "500crores"
console.log(o);

console.log(o.name);

/* console.log()
const p = 50;
p = p + 1;
Constant not allowed
*/

