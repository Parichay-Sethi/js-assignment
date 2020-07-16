// String:
let name = 'Igor';
let age = 10;
console.log(`His name is ${name} and age is ${age}`);

let first = 'parichay';
let last = 'sethi';
console.log(first+last);

var txt = 'bahuballi';
console.log(txt.length);

var str = "locate where 'locate' occours ";
console.log(str.indexOf("locate"));


var str1 = "   Cricket, Baseball, Basketball";
console.log(str1.substr(8,8));

console.log(str1.toUpperCase());
console.log(str1.trim());


//Array:

var fruits = ['apple','orange','banana','kiwi'];
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.push('mango');
console.log(fruits);
console.log(fruits.length);
fruits.shift();
console.log(fruits);
fruits.unshift('apple');
console.log(fruits);
fruits[0]='pineapple';
console.log(fruits);
delete fruits[0];
console.log(fruits);
