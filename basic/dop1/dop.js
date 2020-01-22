// // let arr = [2, 9, 0, 4, 8, 1, 3, 6, 9, 2];
// //
// //
// // function arrayLogger(i) {
// //   console.log(arr[i]);
// //
// //
// //   if (i < arr.length - 1) {
// //     arrayLogger(++i);
// //   }
// // }
// //
// // arrayLogger(0);
//
// // Точная степень двойки.
//      Дано натуральное число N. // TODO задачник
// //   Выведите слово YES, если число N является точной степенью двойки,
// //   или слово NO в противном случае.
// //   Операцией возведения в степень пользоваться нельзя!
//
//
// // тільки є один нюанс) він НЕ бере з масиву останнє і передостаннє число,
// // а програма їх рекурсивно розраховує, навіть якщо на попередньому виклику ці числа були знайдені
//
// // function isTwo(numberToCompare) {
// //   const numDivision = numberToCompare / 2;
// //
// //   if (numberToCompare % 2 !== 0 || numDivision < 1) {
// //     console.log('NO');
// //     return;
// //   }
// //
// //   if (numDivision === 1) {
// //     console.log('YES');
// //     return;
// //   }
// //
// //   isTwo(numDivision)
// // }
// //
// // isTwo(256); // 128 // 64 // 32 // 16 // 8 // 4 // 2
//
//
// // 1, 1, 2 , 3 ,5, 8 ,13, 21, 34
// const maxL = 20;
// const  fibiki = [1, 1];
//
// function fibonacci() {
//   const first = fibiki[fibiki.length - 1];
//   const second = fibiki[fibiki.length - 2];
//
//   const newFibik = first + second;
//
//   fibiki.push(newFibik);
//
//   if (fibiki.length < maxL) {
//     fibonacci()
//   }
// }
//
// fibonacci();
//
// console.log(fibiki);
//
//


let arr = [0, 12, 4, 54, 535, 6, 3, 0, 342];

// arr = [];
arr.length = 0;

for (const xor1x1 of arr) {
  console.log(xor1x1);
}
console.log('_____________________');

for (const ind in arr) {
  console.log(ind);
}


console.log('**************************');


const onj = {
  name: 'Marta',
  time: '9:27',
  city: 'Vliv',
  car: ' ',
  laptop: null,
  apple: undefined
};

let cop = onj;

//
// for (let tyui of onj) {
//   console.log(tyui);
// }

for (let key in onj) {
  console.log(key);

  if (typeof onj[key] == 'string') {
    onj[key] = onj[key].trim()
  }

  if (!onj[key]) {
    delete onj[key]
  }
}

console.log(onj);
