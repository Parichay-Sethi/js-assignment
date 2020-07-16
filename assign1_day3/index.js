let num = prompt('Enter a number');
function check()
    {
        let result = ``
        if(num % 2 == 0)
        {
         result = `The entered number is even`;
        }
        else
        {
         result = `The entered number is odd`;
        }
        return result;
    }
let final = check();

console.log(final);