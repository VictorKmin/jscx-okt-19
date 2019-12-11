console.log(22);
console.log(21);
console.log(131);
console.log(3123);


// alert(1)
// alert(2)
// alert(3)
//
//
// let x = +prompt('Enter num 1')
// let y = +prompt('Enter num 2')
//
// console.time('TEST')
// console.log(x + y);
// console.timeEnd('TEST')

// let b = confirm('Are u 18 ?');
//
// console.log(b);





let age = 35;
let name = 'Maks';
let gender = 'male';
let wife = true;

// if (age >= 18) {
//     console.log('hello');
// } else {
//     if (age <= 65) {
//         if () {
//
//         }
//     } else {
//
//     }
// }
// if (age >= 18) {
//     console.log('hello');
// } else if (age <= 65) {
//     console.log('free tram');
// } else {
//     console.log('Call tour mom');
// }
// && AND
// || OR
// //   T               F
// if (age >= 18 && age < 65) {
//     console.log('GO WORK');
// }
//
// //   T               F            T
// if (age >= 18 || age < 65 && name ==='Viktor') {
//     console.log('GO WORK');
// }

switch (name) {
    case "Viktor":
        console.log('VIKTOR');
        break;
    case "Vova":
        console.log('VOVA');
        break;
    case 'Olga':
        console.log('OLGA');
        break;
    case 'Karina':
        console.log('KARINA');
        break;
    case "Maks":
        console.log('MAKS');
        break;
    default:
        console.log('WRONG NAME');
}

console.log('My name is Vova');


let user = {
    name: 'Viktor',
    age: 24,
    car: false,
    girl: {
        name: 'Olga',
        company: 'Shoko'
    },
    smoking: false,
    company: 'ELEKS'
};

user.car = 'Volvo';

delete user.company;

user.flat = true;
user.bike = 'YAMAHA FAZER';

console.log(user.girl.name);

let key = 'car';
console.log(user[key]);

// тобто можна писати
let key2 = 'car';
console.log(user[key2]);
console.log(user['car']);



