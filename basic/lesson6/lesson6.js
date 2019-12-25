// // // // function someFunc(n, cb) {
// // // //     const res = n * 10;
// // // //     cb(res)
// // // // }
// // // //
// // // // someFunc(9, (someNumber) => {
// // // //     console.log(someNumber, ' IN CB');
// // // // })
// // //
// // // //
// // // // setTimeout(() => {
// // // //     console.log(1);
// // // // }, 0);
// // // //
// // // // console.log(2);
// // // //
// // // // setTimeout(() => {
// // // //     console.log(3);
// // // // }, 0);
// // //
// // // function asyncFunc(isRoomClear, cb) {
// // //     setTimeout(() => {
// // //         if (isRoomClear) {
// // //             cb(null, 1000)
// // //         } else {
// // //             cb(new Error('Clean room first'), null)
// // //         }
// // //     }, 1000)
// // // }
// // //
// // // try {
// // //
// // //     asyncFunc(true, (err, data) => {
// // //         if (err) {
// // //             console.log(err);
// // //         } else {
// // //             console.log(data);
// // //         }
// // //     });
// // // } catch (error) {
// // //     console.error(error);
// // // }
// //
// // // {
// // //     let x = 1232132;
// // //     console.log(x);
// // // }
// // //
// // // console.log(x);
// //
// // // function closure() {
// // //     let password = 12345;
// // //
// // //     let name = 'VIKTOR';
// // //
// // //     return {
// // //         getName: () => name,
// // //         getPass: () => 'PASSWORD IS NOT VISIBLE',
// // //         setName: (newName) => {
// // //             name = newName
// // //         }
// // //     }
// // // }
// // //
// // // // let name = closure().getName();
// // // // console.log(name);
// // // //
// // // // let pass = closure().getPass();
// // // // console.log(pass);
// // // //
// // // // closure().setName('Pavlo');
// // // //
// // // // let name2 = closure().getName();
// // // // console.log(name2);
// // //
// // // let user = closure();
// // //
// // // console.log(user.getName());
// // // console.log(user.getPass());
// // //
// // // user.setName('Pavlo')
// // //
// // // console.log(user.getName());
// // //
// // // let user2 = closure();
// // //
// // // console.log(user2.getName());
// //
// // function counter() {
// //     let x = 0;
// //
// //     return () => {
// //         x++;
// //         console.log(x);
// //     }
// // }
// //
// // console.log(counter().toString());
// // //
// // // counter()();
// // // counter()();
// // // counter()();
// // // counter()();
// // // counter()();
// // // counter()();
// //
// //
// // let c1 = counter();
// // c1()
// // c1()
// // c1()
// // c1()
// // c1()
// // c1()
// //
// // let c2 = counter();
// //
// // console.log('_______');
// // c2()
// // c2()
// // c2()
// // c2()
// //
// // setInterval(()=>{
// //     console.log('ссилки))');
// // }, 5000)
// //
// //
// // console.log(typeof null);
// //
//
//
// // let a = 'FGHJKL:';
// // let b = a;
// // b = 80
// //
// // console.log(b);
// // console.log(a);
//
// let obj = {
//     a: {
//         ttt: 10
//     }
// };
//
// let b = {...obj};
//
// b.a.ttt = 45;
//
// console.log(obj.a) // 1
// console.log(b.a) // 2
//
//

// function rec() {
//     console.log(22);
//     rec();
// }
//
//
// rec();

let arr = [2, 34, 1, 0, 'TEST', false];

function recursator2000(arrToRecurse, i) {
    if (i >= arrToRecurse.length) return;

    console.log(arrToRecurse[i]);

    recursator2000(arrToRecurse, ++i)
}


recursator2000(arr, 0);
