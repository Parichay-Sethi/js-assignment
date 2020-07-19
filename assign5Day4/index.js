let sales = +prompt(`Enter the sale made by employee`)
console.log(sales);
if ( sales>=0 && sales<5000)
    {
        console.log('Commision earned by the employee is 2 %')
    }
else if ( sales>=5001 && sales<10000)
    {
        console.log('Commision earned by the employee is 5 %')
    }    
else if ( sales>=10001 && sales<20000)
    {
        console.log('Commision earned by the employee is 7 %')
    }
else
    {
        console.log(`Commision earned by the employye is 10 %`)
    }