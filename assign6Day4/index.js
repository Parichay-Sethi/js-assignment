let enter = function ()
    {
        let n = +prompt('Enter a number greater than 100');
        for( let i = 0; i < 100; i++)
            { 
                if(i===n)
                {
                enter();
                }
            }
    }
enter();