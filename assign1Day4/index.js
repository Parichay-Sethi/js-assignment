for(let i = 1; i<=100; i++)
{
let num = i;
    if(num%3==0 && num%5==0)
    {
        console.log(`fizzbuzz at number ${num}`);
        continue;
    }   
    
    if(num%3==0)
    {
        console.log(`fiz at number ${num}`);
    }
    if(num%5==0)
    {
        console.log(`buzz at number ${num}`);
    }
    

}