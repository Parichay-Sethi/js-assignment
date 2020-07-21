let arr = ['blue','white','yellow','green','pink','wheat','purple','grey'];


for(let i = 0; i<arr.length;i++)
    {

        setTimeout(() => {
            document.body.style.backgroundColor=arr[i];
        }, 5000*i);
        
    }

