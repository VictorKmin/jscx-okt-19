let arr = [
    'Viktor',
    false,
    'Olga',
    22,
    {
        name: 'Dima'
    },
    [22, 19, true],
    {
        cars: ['Volvo', 'ZIL', 'Ferrari'],
        name: 'Oleg'
    }
];

console.log(arr[6].name);

console.log(arr.length);
console.log(arr[7]);

let lastIndex = arr.length - 1;

console.log(arr[lastIndex]);

console.log(arr[0]);

arr[0] = 'Kolya';

console.log(arr[0]);
console.log('___________________________');

console.log(arr[arr.length - 1].cars[1]);

console.log('___________________________');

let names = ['Doma', 'Ira', 'Dina', 'Oleg', 'Volvo'];

console.log(names);

names.push('Olga');
// names[names.length] = 'Ivan';

console.log(names);

// names = [];

// names.length = 0;

names[100] = 'Victor';

console.log(names);

console.log('***********************************');
// console.log('Loops');

let colors = ['Green', 'Yesllow', 'Red', 'Blue', 'White', 'Pink'];

// console.log(colors[0]);
// console.log(colors[1]);
// console.log(colors[2]);
// console.log(colors[3]);
// console.log(colors[4]);
// console.log(colors[5]);


// for (let i = 0; i < colors.length; i++) {
//     console.log(colors[i])
// }

// FOR OF
// FOR IN
// WHILE


// for (let color of colors) {
//     console.log(color);
// }

let user = {
    name: 'Viktor',
    car: false,
    age: 24,
    company: 'ELEKS'
}

// for (let key in user) {
//     console.log(user[key]);
// }

// let keys = Object.keys(user);
// let values = Object.values(user)
//
// console.log(keys);
// console.log(values);

// let a = 2;
// let b = 0;
//
// // b = a--;
// b = --a;
//
// console.log('-=-=-=-=-=-=-');
// console.log(a);
// console.log(b);
// console.log('-=-=-=-=-=-=-');

// let i = 0;
//
// while (i < colors.length) {
//     console.log(colors[i]);
//     i++;
// }

// let result = 0;
// do {
//     i = i + 1;
//     result = result + i;
//     console.log('HERE', i, result);
// } while (i < 5);


console.log(colors);

// colors.push('Black');
// colors.unshift('Brown');

// let deletedColor = colors.pop();
// console.log(deletedColor);

let xxx = colors.shift();
console.log(xxx);
console.log(colors);
