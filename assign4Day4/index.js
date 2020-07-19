let x = +prompt('enter number 1');
let y = +prompt('enter number 2');
let z = +prompt('enter your preference');
let result = 0;
switch(z)
{
    case 1:
           result = x + y; 
           console.log(`${result} is addition`);
           break;
    case 2:
            result = x - y; 
            console.log(`${result} is subtraction`);
            break;
    case 3:
            result = x * y; 
            console.log(`${result} is multiplication`);
            break;
    case 4:
            result = x / y; 
            console.log(`${result} is division`);
            break;
    case 5:
            result = x ** y; 
            console.log(`${result} is square root`);
            break;
    case 6:
            let a = x * y;
            result = a / 100;
            console.log(`${result} is percentage`); 
            break;                            
    default:
            console.log(`choose correct preference next time`);
            break;
}
