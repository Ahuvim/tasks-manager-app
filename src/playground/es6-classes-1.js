

class Person {
    constructor(name='Anonymous',age=0){
        this.name = name;
        this.age = age;
    }
    getGreatting(){
        //return 'Hi. My name is '+ this.name + '!';
        return `Hi. my name is ${this.name}`
    }
    getDiscription(){
        return `${this.name} is ${this.age} year(s) old. `
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation = "Some Where"){
        super(name,age);
        this.homeLocation = homeLocation;
    }
    hasHomeLocation(){
        return !!this.homeLocation;
    }
    getGreating(){
        let discription = super.getDiscription()
        if(this.hasHomeLocation()){
            discription +=  `I'm visitin from ${this.homeLocation} `;
        }   
        return discription;
    }
}

const maor = new Traveler('Maor',23,'Israel');
console.log(maor.getGreating());
const other = new Traveler();
console.log(other.getGreatting());