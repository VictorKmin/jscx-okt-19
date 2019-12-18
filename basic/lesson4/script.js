// // let names = ['Olga', 'Viktor', 'Dima', 'Ulyanka', 'Oleg', 'Roman'];
// // let newName = ['MyOldNick', 'Zoriana'];
// //
// // let strings = names.concat(names,newName);
// //
// // console.log(strings);
//
//
// let numbers = [5, 9, 1, 8, 5, 0, 7, 11, 15, 90, -5];
//
// let every = numbers.every((value) => {
//     if (value < 0) {
//         return true
//     }
// });
// console.log(every, 'EVERY');
// ///////////////////
//
// let some = numbers.some((value) => {
//     if (value < 0) {
//         return true
//     }
// });
//
// console.log(some, 'SOME');
//
//
// ///////////////////////////////////////////
//
// let filter = numbers.filter((value)=> {
//     if (value > 10) {
//         return value
//     }
// });
//
// console.log(filter, 'FILTER');
//
// ///////////////////////////////////////////
//


// let number = 3;
//
// myFirstFunction();
//
// function myFirstFunction() {
//     if (number > 5) {
//         console.log('OK')
//     } else {
//         console.log('Ne OK')
//     }
// }
//
// let someFunc = function() {
//     console.log(22)
// };
//
// someFunc();
//
//
// myFirstFunction();
//
// number = 10;
//
// myFirstFunction();
//
// number = 0;
//
// myFirstFunction();
//
// ////////////////////////////
//
// function mySecondFunc(xxxx) {
//     console.log(xxxx * 10 - 5);
// }
//
// mySecondFunc(8);
//
// mySecondFunc(0);
//
// //////////////////////////////////////////////
//
// function sumator(a, b) {
//     let result = a + b;
//
//     return result;
// }
//
// let res = sumator(9, 6);
//
// console.log(res);
//
// console.log(res + 10);
//
// let xxx = sumator('Hello', 'TEST');
//
// console.log(xxx + 22);
//
//
// function xxx2(a, b) {
//     let res = a + b;
//
//     return 'HELLO';
// }
//
// let r = xxx2(10, 5);
//
// console.log(r);
//
//
//
// function f(x,y) {
//     return Math.cos( x + y)
// }
//
// let cos1 = f(10, 20);
// console.log(cos1);
//
// let f1 = function (x, y) {
//     return Math.cos( x + y)
// }
//
// let f3 = (x, y) => {
//     return Math.cos( x + y)
// }
//
//
// let cos2 = f3(900,10);
// console.log(cos2);

//
// let comparator = (a, b) => a * b;
//
// let simator1 = comparator(10,5);
//
// console.log(simator1);

//
// let comparator = a => a * 10;
//
// let simator1 = comparator(10);
//
// console.log(simator1);


/////////////////////////////////////////////


// function rtyui(a, b) {
//     let result = a + b;
//
//     return result;
// }

let rtyui = (a, b) => a + b;

let sumator = x => {
    console.log(rtyui(x, 7))
};

sumator(20);
