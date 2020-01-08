// // // OOP
// //
// // // Інкапсуляція
// // // Наслідування
// // // Поліморфізм
// //
// // let arr = [];
// // arr.sort((a, b) => a- b );
// //
// // class Human {
// //     constructor(name, gender, age) {
// //         this.name = name;
// //         this.gender = gender;
// //         this.age = age;
// //     }
// //
// //     greeting(variable) {
// //         console.log(`Hello my name is ${this.name} ${variable}`)
// //     }
// //
// //     logThis() {
// //         console.log(this)
// //     }
// //
// //     getName() {
// //         return this.name
// //     }
// //
// //     setName(newName) {
// //         this.name = newName
// //     }
// // }
// //
// //
// // class Developer extends Human{
// //     constructor(name, gender, age, skill, reward) {
// //         super(name, gender, age);
// //         this.skill = skill;
// //         this.reward = reward;
// //     }
// //
// //     work(hours) {
// //         console.log(`I am codding ${this.skill} ${hours} hour per day`)
// //     }
// //
// //     raiseReward(money) {
// //         const maxReward = this.reward * 1.1;
// //
// //         if (money > maxReward) {
// //             throw new Error('Вийди отсюда розбійник');
// //         } else {
// //             this.reward = money;
// //         }
// //     }
// // }
// //
// //
// // let xxx = new Human('Dima', 'male', 49);
// // let user2 = new Human('Vova', 'male', 22);
// //
// // console.log(xxx.age);
// // console.log(xxx.name);
// // console.log(user2);
// //
// // user2.greeting('TEST');
// // xxx.greeting('NO WAY');
// //
// //
// // console.log(22);
// // xxx.logThis();
// // console.log(xxx);
// // console.log(22);
// //
// // xxx.name = 'PETRO';
// // console.log(xxx);
// //
// // xxx.setName('IVANKO');
// // console.log(xxx);
// //
// // // xxx.work(7); // NOT WORKING
// //
// // let Roman = new Developer('Romko', 'male', 19, 'CSS', 1000);
// //
// // console.log(Roman);
// //
// // Roman.greeting('');
// // Roman.work(15);
// //
// //
// // Roman.raiseReward(1050);
// //
// // console.log(Roman);
//
//
// function Human(name, age, gender) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//
//     // const that = this; // Так не робіть
//     // this.greeting = function() { // І так теж!
//     //     console.log(`Hello my name is ${that.name}`)
//     // }
// }
//
// Human.prototype.greeting = function () {
//     console.log(`Hello my name is ${this.name}`)
// }
//
//
// function Developer(name, age, gender, skill) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.skill = skill;
// }
//
// // Developer.prototype = Human.prototype;
// Developer.prototype = Object.create(Human.prototype);
// // Developer.prototype.__proto__ = Human.prototype;
//
// Developer.prototype.work = function(hours) {
//     console.log(`I am codding ${this.skill} ${hours} hour per day`)
// };
//
// let xxx = new Human('Dima', 49, 'male');
//
// console.log(xxx);
//
// xxx.greeting();
//
//
// let Oleksandr = new Developer('Sasha', 22, 'male', 'HTML');
// Oleksandr.greeting();
// Oleksandr.work(8);
//
// Developer.prototype.greeting = function () {
//     console.log('RRRRR');
// }
//
// xxx.greeting();
// Oleksandr.greeting();


function Hamster(name) {
    this.name = name;
    this.stomach = [];
}

// Hamster.prototype.stomach = [];

Hamster.prototype.findFood = function (food) {
    console.log(this);
    this.stomach.push(food);
};


let stepan = new Hamster('Stepan');
let boris = new Hamster('Boris');

stepan.findFood('Yapko');
stepan.findFood('Grape');

console.log(stepan.stomach);
console.log(boris.stomach);

console.log(boris.name);
console.log(stepan.name);
