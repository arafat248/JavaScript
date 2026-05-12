// function sum(name, roll){
//     result = name + roll
//     console.log(result);   
// }
// sum("arafat", 30)

// let ami = ['arafat', 'tanvir', 'abdulla']

// for(let i=0; i<ami.length; i++)
//     {
//         console.log(ami[i]);
//     }

// function con(){
//     if(true){
//         var h='arafat'
//     }
//     if (true){
//         console.log(h);
//     }
// }
// con()

//templet litarels ``

// const countryname= 'Bangladesh'
// const country=`My country name is ${countryname}`
// console.log(country);

//Distructuring

// const person={
//     name: "arafat",
//     age: 23,
//     friend: ["fahim", "shuvo", "sojeeb"]
// }
// const {name, age, friend}=person;
// console.log(age);
// console.log(person.name);

// const ami=["Arafat", 23, "ami software developer"];
// const [name, age, discription]=ami;
// console.log(name, age, discription);


// function arrow(num1, num2){
//     const result=num1+num2;
//     return result;
// }
// const output=arrow(20, 30);
// console.log(output);

// const products = [
//         {
//             id: 1,
//             name: "Smartphone",
//             brand: "Samsung",
//             color: "Black",
//             model: "Galaxy S23"
//         },
//         {
//             id: 2,
//             name: "Laptop",
//             brand: "Dell",
//             color: "Silver",
//             model: "XPS 13"
//         },
//         {
//             id: 3,
//             name: "Headphones",
//             brand: "Sony",
//             color: "Black",
//             model: "WH-1000XM5"
//         },
//         {
//             id: 4,
//             name: "Smartwatch",
//             brand: "Apple",
//             color: "Space Gray",
//             model: "Series 9"
//         },
//         {
//             id: 5,
//             name: "Tablet",
//             brand: "Lenovo",
//             color: "Blue",
//             model: "Tab P11"
//         }
//         ];
// const result=products.find(pd=>pd.id==3);
// console.log(result);
// const results=products.filter(pd=>pd.color=="Black");
// console.log(...results);
// const map=products.map(pd=>pd.id*3);
// console.log(map);


// class Person {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     introduce(){
//         console.log(`I am ${this.name}, and I am ${this.age} years old.`);
//     }
// }
// const person1 = new Person("Arafat", 25);
// person1.introduce();

const promise = new Promise((resolve, reject) => {
    let success = true;
    if(success){
        resolve("Data loaded");
    }else{
        reject("Failed");
    }
});
promise
.then(res => console.log(res))
.catch(err => console.log(err));