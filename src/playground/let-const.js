const name ="Maor";
console.log("My name is:",name);


//Exercises
const firstNmae = (fullName)=>fullName.split(' ')[0];

const multiplier = {
    numbers: [1,2,3],
    multiplyBy: 2,
    multiplyFunction(){
        return this.numbers.map((number)=>this.multiplyBy*number)
    }
};

console.log(multiplier.multiplyFunction());