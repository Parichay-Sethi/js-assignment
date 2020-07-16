let data = prompt(`enter os name and version with a space`);
let first = data.split(' ')[0];
let second = data.substring(first.length).trim();
console.log(`The OS name is ${first} and version is ${second}`);
