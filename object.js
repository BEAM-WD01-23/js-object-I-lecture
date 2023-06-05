//data types:
//-string 'name' , '10'
//-number , 3,6, .6, 
//-boolean true, false
//-array ['one' 2, true, "two"];
//
//unimmutable string, number, boolean ... 
//array & object immutable 
//differences, array vs object
    //array - stored in ordered collection ex: 
let myArray = ['one', 'two', 'three', 'four'];
    // array index of array is zero based (starts from zero)
//console.log(myArray[0]);//z first value
//console.log(myArray[myArray.length-1]);//z last value ..
let changeLastOne = myArray[myArray.length-1] = 'z last number';
console.log(changeLastOne);//re-assign z last value

//
//
//Object is key value pairing. object is a collection of key-value pairs 
    //where the values can be:
                    //- properties or 
                    //- methods. 
//ES5 European Computer Manufacturers Association ...
//key-value pair 
//ES5 function-based ... 
//ES6 class-based ...
//1
//hard coaded, not good practise 
    // function Person(){
    //     this.name = 'Ahmed';
    //     this.age = 30;
    //     this.profession = 'Lawyer'
    // }
    // //console.log(Person);
    // let personOne = new Person();
    // console.log(personOne);//Person { name: 'Ahmed', age: 30, profession: 'Lawyer' }
    // let personTwo = new Person()
    // console.log(personTwo)//Person { name: 'Ahmed', age: 30, profession: 'Lawyer' }
    //
    //
    //with constructor, parameters and adding a method inside an object ...
    function Person(name, age, profession){//constructor ...
        this.name = name;
        this.age = age;
        this.profession = profession;
        this.greeting = function(a, b){
           // return a - b
            console.log('Hi this is ' + this.name + ' I am ' + this.age + '  years old & I am a ' + this.profession);
        }
    }
    //instantiating an object & create as much new object as we want ...
    //
    let personOne = new Person('Ahmed', 30, 'Lawyer');
    //console.log(personOne);//Person { name: 'Ahmed', age: 30, profession: 'Lawyer' }
    //console.log(personOne.greeting(1, 2));//Hi this is Ahmed I am 30  years old & I am a Lawyer
   // console.log(personOne.age);
    //
    let personTwo = new Person('Mo', 33, 'Student');
    //console.log(personTwo.greeting());//Hi this is Mo I am 33  years old & I am a Student

    //console.log(personTwo);//Person { name: 'Mo', age: 33, profession: 'Student' }
    //
    //
    //adding method to an object ... function, function inside a function , length, ();
    //console.log('hi');
    //let myDay = new Date();
    //console.log(myDay)
    const myWords = 'hi there';
    let convertToCapital = myWords.toUpperCase();
    //console.log(convertToCapital);
//
//2
//Object with variable ...
const Cars = {
    name: 'Fiat',
    price: '5000€',
    production: 2005,
    carPresentation(){
        return `This car is ${this.name} it costs ${this.price} it is produced in ${this.production}`;
    }
}
//console.log(Cars);//{ name: 'Fiat', price: '5000€', production: 2005 }
//console.log(Cars.carPresentation());//This car is Fiat it costs 5000€ it is produced in 2005
//console.log(Cars.name)
let changeNmae = Cars.name = 'Toyota';
// console.log(changedName);
//console.log(Cars);

//console.log(Cars.production)
//
//3 Copying an object (shallow and deep-copying) , primitive values
//primitive values, unimmutable, unchangeable ..
let myNumber = 10;
let newNumber = myNumber;
newNumber = 20;

console.log(myNumber);//10
console.log(newNumber);//20
//with object
//Shallow copying 
let person = {
    name: 'Nicole',
    age: 30,
    profession: 'Artist'
}
let newPerson = person;
newPerson.name = 'Malik';
//console.log(newPerson);//Malik
//console.log(person);//Malik
//
//object , key = value pairing 
// let personalInfo = {
//     name: 'Daniel',//only this was disconnected (now shown)
//     age: 30,
//     prfession: 'Athlet',
//     address: {
//         street: 'street123',
//         city: 'New_York',//this one was connected (shown)
//         postalCode: 12543,
//         country: 'USA'//it was connected (shown)
//     }
// };
// //console.log(personalInfo);
// //method to shallow-copying
 //let newPersonInformation = Object.assign({}, personalInfo);
// //console.log(newPersonInformation);
// newPersonInformation.name = 'Harold';
// newPersonInformation.address.city = 'California';
// newPersonInformation.address.country = 'California';

// console.log(personalInfo);//only object values have changed and primitive value is stkll the same 
// console.log(newPersonInformation);//both primitive value and object values changed
//
//Deep-copying, cloning
let personalInfo = {
    name: 'Daniel',
    age: 30,
    prfession: 'Athlet',
    address: {
        street: 'street123',
        city: 'New_York',
        postalCode: 12543,
        country: 'USA'
    }
};
//console.log(personalInfo);
//method to shallow-copying
let newPersonInformation = JSON.parse(JSON.stringify(personalInfo));//separate the old object to the newone, change primitive & object values
//console.log(newPersonInformation);
newPersonInformation.name = 'Harold';
newPersonInformation.address.city = 'California';
newPersonInformation.address.country = 'California';

console.log(personalInfo);//keep the original object, nothing changes
console.log(newPersonInformation);//all changes will be applied (primitive & object values ...)

