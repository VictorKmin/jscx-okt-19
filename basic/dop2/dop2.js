// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then(value => value.json())
//   .then(todos => {
//     console.log(todos);
//   });
//
//
// fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
//   .then(value => value.json())
//   .then(data => {
//     console.log(data);
//   });
//
//
//
//
// function wakeUp(isGood) {
//   return new Promise((resolve, reject) => {
//     if (isGood) {
//       resolve([1, 2, 435, 'HELLO']);
//     } else {
//       reject({name: 'Roman', surname: 'Z'})
//     }
//   })
// }
//
// // wakeUp(true)
// //   .then(xxx => {
// //     console.log(xxx);
// //   })
// //   .catch(ttt =>  {
// //     console.log(ttt);
// //   })
//
// async function start() {
//   try {
//     let newVar = await wakeUp(false);
//     console.log(newVar);
//   } catch (e) {
//     console.log('ERROR: ' + JSON.stringify(e))
//   }
//
// }
//
// start();


// const user = {
//   name: 'STR',
//   pass: 'STR'
// }

const user = 'Гииии';

console.log(user.name);
