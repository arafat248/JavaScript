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


function arrow(num1, num2){
    const result=num1+num2;
    return result;
}
const output=arrow(20, 30);
console.log(output);