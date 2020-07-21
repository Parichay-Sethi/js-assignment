let num = +prompt('Enter a number');
let arr = [];
for(let i = 0; i<num; i++)
    {
       arr.push(i);
    }

console.log(arr);

let oddArray = arr.filter( number => number%2 );

console.log(oddArray);

let cube = oddArray.map(function(el){
    return el**3;
})

console.log(cube);