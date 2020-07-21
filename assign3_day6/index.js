var name = window.prompt("Enter your name: ");
alert("Your name is " + name);

function time(){
    var d = new Date();
    var s = d.getSeconds();
    var m = d.getMinutes();
    var h = d.getHours();
    document.write(h + ":" + m + ":" + s);
    
}
time();

const dmode = document.getElementById('dark');

dmode.onclick = function changeColor()
{
    
    document.body.style.backgroundColor = 'black';
}