// // function nameLogger() {
// //     console.log(this.name)
// // }
// //
// // // nameLogger();
// //
// // let user = {
// //     name: 'Victor',
// //     povtorka: 2016
// // };
// //
// // let car = {
// //     name: 'Lanos',
// //     age: 8
// // };
// //
// //
// // // nameLogger.call(user);
// // //
// // nameLogger.call(car);
// // //
// // // nameLogger.apply([user, car]);
// //
// // let nameLoggerWithUser = nameLogger.bind(user);
// // let carNameLogger = nameLogger.bind(car);
// //
// //
// // nameLoggerWithUser();
// // nameLoggerWithUser();
// // nameLoggerWithUser();
// //
// //
// // carNameLogger();
// //
// //
// //
// // class Product {
// //     constructor(price, photo, name) {
// //         this.name = name
// //         this.price = price
// //         this.photo = photo
// //     }
// // }
// //
// // let frezer = new Product(2000, 'frezer.jpg', 'Wirpool')
// // let pralka = new Product(6000, 'plralka.jpg', 'Samsung')
// // let TV = new Product(10000, 'tv.jpg', 'Sony')
// //
// // function drawProduct() {
// //     console.log(`Price is ${this.price}`)
// //     console.log(`Name is ${this.name}`)
// //     console.log(`Picture is ${this.photo}`)
// //     console.log(`_________________`)
// // }
// //
// // let prods = [pralka, TV, frezer];
// //
// // for (const product of prods) {
// //     drawProduct.call(product)
// // }
//
// function asyncFunc(cb) {
//     setTimeout(() => {
//         cb(`HELLO`)
//     }, 1000)
// }// OLD
//
// asyncFunc(function (text) {
//     console.log(text);
// }); // OLD
//
//
// // function withPromise() {
// //     return new Promise((resolve, reject) => {
// //         setTimeout(() => {
// //             resolve('ERROR');
// //         }, 2000)
// //     })
// // }
// //
// //
// // withPromise()
// //     .then(xxx => {
// //         console.log(xxx);
// //         return 'MY NAME IS VIKTOR'
// //     })
// //     .then(str => {
// //         console.log(str);
// //         return 22
// //     })
// //     .then(value => {
// //         console.log(value);
// //     })
// //     .catch(reason => {
// //         console.error('______________');
// //         console.error(reason);
// //         console.error('______________');
// //     });
// //
//
//
// function clearHouse(isClear) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isClear) {
//                 resolve(2000);
//             } else {
//                 reject('Clear house first')
//             }
//         }, 2000)
//     })
// }
//
//
// function buyClothes(money) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (money < 1000) {
//                 reject('I have not enough money')
//             } else {
//                 console.log(`Buy jeans for ${money / 4}`);
//                 console.log(`Buy sweater for ${money / 2}`);
//                 resolve('GOOD !')
//             }
//         }, 500)
//     })
// }
//
// //
// // clearHouse(false)
// //     .then(reward => {
// //         console.log(`Buy jeans for ${reward / 4}`);
// //         console.log(`Buy sweater for ${reward / 2}`);
// //     })
// //     .catch(reason => {
// //         console.log(`WARNING! ERROR BECAUSE ${reason}`);
// //     });
// //
// //
// // clearHouse(true)
// //     .then(reward => {
// //         console.log(`Buy jeans for ${reward / 4}`);
// //         console.log(`Buy sweater for ${reward / 2}`);
// //     })
// //     .catch(reason => {
// //         console.log(`WARNING! ERROR BECAUSE ${reason}`);
// //     });
//
//
// clearHouse(true)
//     .then(reward => {
//         console.log(`CONGRATULATIONS`);
//
//         return buyClothes(reward)
//     })
//     .then(value => {
//         console.log(value);
//     })
//     .catch(reason => {
//         console.log('ERROR: ' + reason);
//     })


// ASYNC AWAIT ES8
function clearHouse(isClear) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isClear) {
                resolve(5);
            } else {
                reject('Clear house first')
            }
        }, 2000)
    })
}


function buyClothes(money) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (money < 1000) {
                reject('I have not enough money')
            } else {
                console.log(`Buy jeans for ${money / 4}`);
                console.log(`Buy sweater for ${money / 2}`);
                resolve('GOOD !')
            }
        }, 500)
    })
}

async function goToWork() {
    try {
        let xxx = await clearHouse(true);
        console.log('CONGRATS');

        let smth = await buyClothes(xxx);
        console.log(smth);
    } catch (e) {
        console.log('ERRROR: ' + e);
    }
}

goToWork();


