let marks = prompt('Enter the marks');
if(marks>80)
{
    console.log(`Marks are ${marks} and grade is A`);
}
else if(marks>60 && marks<80)
{
    console.log(`Marks are ${marks} and grade is B`);
}
else if(marks>40 && marks<60)
{
    console.log(`Marks are ${marks} and grade is C`);
}
else
{
    console.log(`Marks are ${marks} and grade is D`);
}



switch (marks)
{
case 'A+':
console.log("Marks >= 90");
break;
case 'A':
console.log("Marks [ >= 80 and <90 ]");
break;
case 'B+':
console.log("Marks [ >= 70 and <80 ]");
break;
case 'B':
console.log("Marks [ >= 60 and <70 ]");
break;
case 'C':
console.log("Marks < 60");
break;
default:
console.log("Wrong grade.........");
}
