// // // ABBA    7776777
// //
// //
// // // 11111 - 99999
// //
// // // 65478 * 32744 = 888887788888
// //
// // // function recursion2070() {
// // //
// // //
// // //     recursion2070()
// // // }
// //
// //
// // // number
// // // str
// // // boolen
// // // null
// // // undef
// // // Symbol
// //
// // // object
// //
// //
// // let x = 10;
// // let a = x;
// // a = 222;
// // console.log(x);
// // console.log(a);
// //
// let obk = {
//     name: 'Viktor',
//     company: {
//         label: 'ELEKS',
//         title: 'MSE'
//     },
//     car: false,
//     girl: true,
//     notebook: 'DELL'
// };
//
// let realCopy = {...obk};
//
// realCopy.name = 'Oleg';
// realCopy.company.title = 'SSE';
//
// console.log(realCopy);
// console.log(obk);


// let arr = [
//     12, false,
//     [99, true, "STR",
//         ['TEST', 'OMEGA']
//     ]
// ];
//
// console.log(arr.flat(7));

// //
// //
// // let values = Object.values(obk);
// // let keys = Object.keys(obk);
// //
// // console.log('_____________');
// // console.log(values);
// // console.log('_____________');
// // console.log(keys);
//
//
// function recursion2070(arr, i) {
//     if (i < arr.length) {
//         console.log(arr[i]);
//         recursion2070(arr, ++i)
//     }
// }
//
//
// let arr = [1, 2, 'str', false, 'NUMBER'];
//
// recursion2070(arr, 0);
//
//
//
// setTimeout(()=> {
//     console.log('HELLO AFTER 1s');
// }, 2000);
//
//
// function clearHouse(isClear, callback) {
//     console.log('TIMEOUT START');
//     setTimeout(() => {
//         if (isClear) {
//             callback(null, 1000);
//         } else {
//             callback(new Error('BAD BOY'), null);
//         }
//         console.log('TIMEOUT FINISH');
//     }, 2000);
// }
//
//
// clearHouse(true, (err, reward) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('Buy jeans', reward / 2);
//         console.log('Buy shirt', reward / 4);
//     }
// });
// clearHouse(true, cbForHouse);
//
// function cbForHouse(err, data) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('Buy something not useful', data / 2);
//         console.log('Buy dress', data / 4);
//     }
// }


// function f() {
//     return 22222
// }
//
// let number = f();
// console.log(number);

console.time('PRIMES')
console.time('FULL')
const prom = [];
const multiple = [];

for (let i = 10000; i <= 99999; i++) {
    prom.push(i)
}

for (let i = 0; i < prom.length; i++) {
    for (let j = 2; j < prom[i]; j++) {
        if (prom[i] % j === 0) {
            prom.splice(i, 1);
            i--
        }
    }
}

console.timeEnd('PRIMES')

console.time('MULT')

// for (let i = 0; i < prom.length; i++) {
for (let i = 0; i < (prom.length / 2) + 1; i++) {
    for (let j = 0; j < prom.length; j++) {
        const number = prom[i] * prom[j];
        const stringNumber = number.toString();
        const revertedNumber = stringNumber.split("").reverse().join("");

        if (revertedNumber === stringNumber) {
            multiple.push(number)
        }
    }
}

const [sorted] = multiple.sort((a, b) => b - a);

console.log(sorted, "FIRST");
console.timeEnd('MULT')
console.timeEnd('FULL')
