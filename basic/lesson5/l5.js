let ar1 = [19, 3, 4, 302, 454, 54, 5, 3];
let ar2 = ['chgre', 'ads', 'fdfdsf', 'ertyuio'];

// let numbers = ar1.concat(ar2);
//
// console.log(numbers);
// console.log(ar2);
// console.log(ar1);
//
// let nums = [...ar2, ...ar1];
// console.log(nums);
//
// let numbers = ar1.reverse();
// console.log(numbers);
//
// let xxx = ar2.filter(value => value.includes('f'));
// console.log(xxx);
//
// let b = ar1.every(value => value > 5);
// console.log(b);
//
// let c = ar1.some(value => value > 5);
// console.log(c);
//
let users = [
    {
        name: 'Vitor',
        blacklist: false,
        age: 70
    }, {
        name: 'Dima',
        blacklist: false,
        age: 18
    }, {
        name: 'Igor',
        blacklist: false,
        age: 9
    }, {
        name: 'ROman',
        blacklist: true,
        age: 81
    }, {
        name: 'Kolya',
        blacklist: true,
        age: 64
    },
]
//
// let userInBL = users.find((user) => user.blacklist);
// console.log(userInBL);
//
// let number = users.findIndex(user => user.blacklist);
// console.log(number);
//
//
// let arryaToFlat = [
//     [1, 2, 4, 8,
//         ['TEST', 'I', 'Lov', 'NODE']
//     ],
//     [8, 17, 'JEllo', 'Riktos']
// ];
//
// // [1, 2, 4, 8, "TEST", "I", "Lov", "NODE", 8, 17, "JEllo", "Riktos"]
// let anies = arryaToFlat.flat(1);
//
// let cat = [1, 2, 4, 8, "TEST", "I", "Lov", "NODE", 8, 17, "JEllo", "Riktos"];
// console.log(anies);
//
// users.forEach((user) => {
//     if (user.blacklist) {
//         return
//     }
//
//     updateDataBase(value)
// });
//
// ar1.forEach((value) => {
//     if (value < 10) {
//         return
//     }
//
//     console.log(value);
// });
//
// console.log(ar1);
//
// let str = 'HELO WORLD 12352, MY NAME DIONIS NADYA';
//
// let b = str.includes('NIS');
// console.log(b);
// //
// // let arrayOfNums = [1,23,4,354,3549];
// //
// // let maxNum = Math.max(...arrayOfNums);
// // console.log(maxNum);
// //
// // let b1 = ar1.includes(...arrayOfNums);
// //
// // console.log(b1);
//
// let number = ar1.lastIndexOf(3);
// console.log(number);
//
// let unknowns = users.map((user, index) => {
//     if (index % 2) {
//         user.id = index + 1;
//         user.name += 'fsdfsdfsdfds';
//     }
//
//     return user
// });
// console.log(unknowns);
//
// let sort = ar1.sort((a, b) =>  b - a);
//
// console.log(sort);
//
//
//
// let sort = ar2.sort((a, b) => {
//     if (a > b) {
//         return 1
//     } else {
//         return -1
//     }
// });
// console.log(sort);
//
//
// // let ar1 = [19, 3, 4, 3, 454, 54, 5, 3];
//
// let number = users.reduce((previousValue, currentValue) => {
//     console.log(previousValue + currentValue.age);
//     console.log('____________________');
//     return previousValue + currentValue.age
// }, 0);
//
// console.log(number);
//
//
// let numbers = ar1.slice(1, -3);
// console.log(numbers);

let numbers = ar1.splice(-2, 0, ...[32,55654,646,464,23]);

console.log(numbers);
console.log(ar1);


let s = ar1.join('');
console.log(s);
console.log(+s);

let n = 1.025e+10;
let n1 = 10.25e+9;

console.log(n);
console.log(n1);
