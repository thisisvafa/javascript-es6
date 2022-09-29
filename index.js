// ------------------------------------------------------
// function sayHello() {
//     for (let i = 0; i < 5; i++) {
//         console.log(i);
//     }
// }
// sayHello();


// ------------------------------------------------------
// const person = {
//     name: 'vafa',
//     walk() {},
//     talk() {}
// };

// person.talk();

// const tragetMember = 'name';
// person[tragetMember.value] = 'Safa'


// ------------------------------------------------------
// const person = {
//     name: 'vafa',
//     walk() {
//         console.log(this);
//     },
// };
 
// person.walk();

// const walk = person.walk.bind(person);
// walk();


// ------------------------------------------------------
// const square = function(number) {
//     return number * number;
// }

// const square = number => number * number;
// console.log(square(2));

// const jobs = [
//     { id: 1, isActive: true },
//     { id: 2, isActive: true },
//     { id: 3, isActive: false },
// ];

// // const activeJobs = jobs.filter(function(job) { return job.isActive });
// const activeJobs = jobs.filter(job => job.isActive );
// console.log(activeJobs);


// ------------------------------------------------------
// const person = {
//     talk() {
//         // var self = this;
//         // setTimeout(function() {
//         //     console.log('self', self);
//         // }, 1000);
//         setTimeout(() => {
//             console.log('this', this);
//         }, 1000);
//     }
// };

// person.talk();


// ------------------------------------------------------
// const colors = ['red', 'green', 'blue'];
// // const items = colors.map(function(color) {
// //     return '<li>' + color + '</li>';
// // });
// const items = colors.map(color => `<li>${color}</li>` );
// console.log(items);


// ------------------------------------------------------
// const address = { 
//     street: 'Rasht',
//     city: 'Gilan',
//     country: 'Iran',
// };

// // const street = address.street;
// // const city = address.city;
// // const country = address.country;
// const { street, city, country } = address;


// ------------------------------------------------------
// const first = [1, 2, 3];
// const second = [4, 5, 6];

// // const combined = first.concat(second);
// const combined = [...first, 'a', ...second, 'b'];
// console.log(combined);

// const first = { name: 'vafa' };
// const second = { job: 'programer' };

// const combined = {...first, ...second, location: 'Iran'};
// console.log(combined);


// ------------------------------------------------------
// // const person = {
// //     name: 'Vafa',
// //     walk() {
// //         console.log("walk");
// //     }
// // };

// class Person {
//     constructor(name) {
//         this.name = name;
//     }

//     walk() {
//         console.log("walk");
//     }
// }

// const person = new Person('Vafa');
// console.log(person);


// ------------------------------------------------------
// class Person {
//     constructor(name) {
//         this.name = name;
//     }

//     walk() {
//         console.log("walk");
//     }
// }

// class Teacher extends Person {
//     constructor(name, degree) {
//         super(name);
//         this.degree = degree;
//     }

//     teach() {
//         console.log('teach');
//     }
// }

// const teacher = new Teacher('Vafa', 'MSc');
// console.log(teacher.name);


// ------------------------------------------------------
// import { Teacher } from "./teacher.js";
import Teacher from "./teacher.js";

const teacher = new Teacher('Vafa', 'MSc');
teacher.teach();