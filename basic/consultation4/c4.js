// // // class User {
// // //     constructor(name, age, car) {
// // //         this.name = name
// // //         this.age = age
// // //         this.car = car
// // //     }
// // // }
// // //
// // // // TODO задачник
// // // let u1 = new User('Dima', 26, 'Lanos');
// // // let u2 = new User('Vikor', 24, false);
// // // let u3 = new User('Olag', 28, 'ZIL');
// // // let u4 = new User('Karina', 15, 'Smart');
// // // let u5 = new User('Nana', 19, false);
// // //
// // //
// // // let arr = [u1, u2, u3, u4, u5];
// // //
// // // let usersWCar = 0;
// // // let number = arr.reduce((previousValue, currentValue) => {
// // //     if (currentValue.car) {
// // //         usersWCar++;
// // //         return previousValue + currentValue.age
// // //     }
// // //
// // //     return previousValue;
// // // }, 0);
// // //
// // //
// // //
// // // console.log(number/ usersWCar);
// // //
// // //
// //
// //
// // const str = 'на Рахунок домашки про Машинку друкувальну то З сеттаймаутом тре Робити?';
// //
// // const words = str.split(' ');
// //
// // console.log(words);
// //
// // words.forEach(word => {
// //     const [letter] = word;
// //
// //     if (letter === letter.toUpperCase()) {
// //         console.log(word);
// //     }
// // });
// //
// //
// // // @victor_fzs #питаннянаконсультацію
// // // Хотілося ще б прикладів роботи з різними методами строк.
// // // Наприклад, знайти всі слова в реченні, які починаються з великої літери.
// //
// //
// // //
// // // let arr = ['H', "E", 'L', 'L', 'O']; // HELLO
// // //
// // // let [word1, eLetter] = arr;
// // //
// // // console.log(word1, eLetter);
// // //
// // // let hLettr = arr[0]
// // // let eLettr = arr[1]
// // // let lLettr = arr[2]
//
//
// let arr = ['Vlad', 'Oleg', 'Kari', 'Roman', 'Andeii', 'Nastya.'];
// let arr2 = ['Hello', 22, 1235];
//
// // const [v, o, ...other] = arr;
// //
// // console.log(other);
//
// let arrSum = [...arr2, ...arr];
//
// console.log(arrSum);
//
// // console.log(arr + arr2);
//
//
// let user = {
//     name: 'Viktop',
//     age: 22,
//     skill: null,
//     girl: true
// };
//
// let car = {
//     name: 'Lanos',
//     power: 10,
//     price: 3000
// };
//
// // user.car = car;
// // user.car = {...car};
//
// // console.log(user);
//
//
// // let objSum = {...user, ...car};
//
// // console.log(objSum);
//
// // let userCar = Object.assign(car, user);
// //
// // userCar.name = 'Dima'
// //
// // console.log(user);
// // console.log(userCar);
// //
// //
//
// let useCopy = {...user};
//
// useCopy.name = 'Dima'
//
// console.log(user);
// console.log(useCopy);
//
//
// function wakeUp(isWorkDay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             isWorkDay ?
//                 resolve('Oh no. Another day .....') :
//                 reject('Hoooray')
//         }, 1000)
//     })
// }
//
// function goToKitchen(isDinnerPresent) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isDinnerPresent) {
//                 resolve('Pik pik')
//             } else {
//                 reject('I will eat on ELEKS')
//             }
//         }, 500)
//     })
// }
//
// function goShower(isWaterPresent) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isWaterPresent) {
//                 resolve('Wzzzzzzzz')
//             } else {
//                 reject('SMELL')
//             }
//         }, 2500)
//     })
// }
//
// async function myDay(isGoodDay) {
//     try {
//         let wakingUp = await wakeUp(isGoodDay);
//         console.log(wakingUp);
//
//         let dinner = await goToKitchen(false);
//         console.log(dinner);
//
//         let isClear = await goShower(true);
//         console.log(isClear);
//     } catch (e) {
//         console.error('ERROR: ' + e)
//     }
// }
//
// myDay(true);
//
//
//
// function wakeUp(isWorkDay, cb) {
//     setTimeout(() => {
//         isWorkDay ?
//             cb(null, 'Oh no. Another day .....') :
//             cb('Hoooray')
//     }, 1000)
// }
//
// function goToKitchen(isDinnerPresent, cb) {
//     setTimeout(() => {
//         if (isDinnerPresent) {
//             cb(null, 'Pik pik')
//         } else {
//             cb('I will eat on ELEKS')
//         }
//     }, 500)
// }
//
//
//
// function goShower(isWaterPresent, cb) {
//     setTimeout(() => {
//         if (isWaterPresent) {
//             cb(null, 'Wzzzzzzzz')
//         } else {
//             cb('SMELL')
//         }
//     }, 2500)
// }
//
//
// wakeUp(true, (err, data)=> {
//     if (err) {
//         console.log('ERROR: ' + err);
//     } else {
//         console.log(data);
//         goToKitchen(true, (err, data)=> {
//             if (err) {
//                 console.log('ERROR: ' + err);
//             } else {
//                 console.log(data);
//                 goShower(false, (err, data)=> {
//                     if (err) {
//                         console.log('ERROR: ' + err);
//                     } else {
//                         console.log(data);
//                         console.log('FINISH !');
//                     }
//                 })
//             }
//         })
//     }
// });


class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class Category {
    constructor(name) {
        this.name = name;
        this.products = [];
    }

    showProducts() {
        console.log(this.products);
    }
}

class Market {
    constructor(name) {
        this.name = name;
        this.categories = []
    }

    showCategories() {
        console.log(this.categories);
    }
}

let berr = new Product('1715', 17.15);
let soap = new Product('Dove', 15);
let book = new Product('English File', 900);
let vodka = new Product('Slava', 50);
let showerGale = new Product('Marselias', 100);

const alko = new Category('Alko');
const shower = new Category('Shower');
const books = new Category('Books');

alko.products.push(berr);
alko.products.push(vodka);

shower.products.push(soap);
shower.products.push(showerGale);

books.products.push(book);

const AlkoMarket = new Market('AlkoSvit');
const Bokarnya = new Market('All Books Shop');
const Milnya = new Market('EVA');

AlkoMarket.categories.push(alko);
Bokarnya.categories.push(books);
Milnya.categories.push(shower);

AlkoMarket.showCategories();

console.log(AlkoMarket.categories[0]);


