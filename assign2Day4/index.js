const student = {
    name : `Helsinki`,
    age : `24`,
    products: {
        diceGame: `Two player dice game using JavaScript`
    }
}

console.log(student.age);
console.log(student.products.diceGame);

const {name,age,products:{diceGame}} = student;
console.log(name,age,diceGame);