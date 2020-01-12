// // // // // // // // Привіт! Питання на консультацію:
// // // // // // // // 1. Розбири дз № 6.
// // // // // // // // 2. Ще раз про класи розповісти на прикладі
// // // // // // // // 3. Ну і поліндроми теж на прикладі ще раз
// // // // // // //
// // // // // // // // Домашка номер 6 (там де deep copy, зробити аналог flat який ми брали, але без flat та завдання із рекурсією)
// // // // // // //
// // // // // // //
// // // // // // // // 1)
// // // // // // // //
// // // // // // let object = {
// // // // // //     name: "Viktor",
// // // // // //     car: false,
// // // // // //     job: {
// // // // // //         company: 'EKELS',
// // // // // //         title: 'Middle',
// // // // // //         info: {
// // // // // //             owner: 'Oleksii',
// // // // // //             year: 1991
// // // // // //         }
// // // // // //     },
// // // // // //     girl: true
// // // // // // };
// // // // // // //
// // // // // // // //
// // // // // // // function DeepCopy(objectToCopy) {
// // // // // // //     let copy = {};
// // // // // // //
// // // // // // //     for (const key in objectToCopy) {
// // // // // // //
// // // // // // //         typeof objectToCopy[key] === "object" ?
// // // // // // //             copy[key] = DeepCopy(objectToCopy[key]) :
// // // // // // //             copy[key] = objectToCopy[key];
// // // // // // //
// // // // // // //         //
// // // // // // //         // if (typeof objectToCopy[key] === "object") {
// // // // // // //         //     copy[key] = DeepCopy(objectToCopy[key])
// // // // // // //         // }
// // // // // // //         // else {
// // // // // // //         //     copy[key] = objectToCopy[key];
// // // // // // //         // }
// // // // // // //     }
// // // // // // //
// // // // // // //     return copy;
// // // // // // // }
// // // // // // // //
// // // // // // // //
// // // // // // // // let copy = deepCopy(object);
// // // // // // // //
// // // // // // // // copy.job.payment = {
// // // // // // // //     currency: 'UAH',
// // // // // // // //     value: 5000
// // // // // // // // };
// // // // // // // //
// // // // // // // // console.log(copy);
// // // // // // // // console.log('_________________');
// // // // // // // // console.log(object);
// // // // // // //
// // // // // // //
// // // // // // // // function DeepCopy(object) {
// // // // // // // //     let objcopy = {...object};
// // // // // // // //
// // // // // // // //     for (let i in objcopy) {
// // // // // // // //
// // // // // // // //         if (typeof objcopy[i] == "object") {
// // // // // // // //             objcopy[i] = DeepCopy(objcopy[i]);
// // // // // // // //         }
// // // // // // // //     }
// // // // // // // //     return objcopy
// // // // // // // // }
// // // // // // //
// // // // // // //
// // // // // // // let copy = DeepCopy(object);
// // // // // // //
// // // // // // //
// // // // // // // copy.job.company = 'Symphony Solutions';
// // // // // // // console.log(copy);
// // // // // // // console.log('__________________');
// // // // // // // console.log(object);
// // // // // //
// // // // // //
// // // // // //
// // // // // // for (key in object) {
// // // // // //     console.log(key);
// // // // // // }
// // // // //
// // // // //
// // // // //
// // // // //
// // // // // let arr = [1,5, ['HELLO', 'WORLD', [9,0]], true];
// // // // //
// // // // //
// // // // // function flatter(arrToFlat) {
// // // // //     const copy = [];
// // // // //
// // // // //     for (const value of arrToFlat) {
// // // // //         if (Array.isArray(value)) {
// // // // //             copy.push(...flatter(value));
// // // // //         } else {
// // // // //             copy.push(value);
// // // // //         }
// // // // //     }
// // // // //
// // // // //     return copy;
// // // // // }
// // // // //
// // // // // let flatter1 = flatter(arr);
// // // // //
// // // // // console.log(arr);
// // // // // console.log(flatter1);
// // // // //
// // // // //
// // // // //
// // // // // // // // // 2. Ще раз про класи розповісти на прикладі
// // // // //
// // // // //
// // // // // // можем цю таску з дз розібрати?
// // // // // // взять за основу класс юзера из задания про классы добавить
// // // // // // при помощи prototype 4 любых метода. Взять библиотечный класс Array и добавить ему новый
// // // // // // метод который - при вызове выводит на консоль текущий массив - выводит только парные елементы
// // // // // // - выводит только элементы с парными индексами
// // // // //
// // // // // class User {
// // // // //
// // // // //     constructor(name, age) {
// // // // //         this.name = name;
// // // // //         this.age = age;
// // // // //     }
// // // // // }
// // // // //
// // // // //
// // // // //
// // // // // User.prototype.colyaduvatu = function() {
// // // // //     console.log('добрий вечір тоообі... ');
// // // // // };
// // // // //
// // // // // User.prototype.eatKutya = function() {
// // // // //     console.log('Om nom nom');
// // // // //     console.log('Drink');
// // // // // };
// // // // //
// // // // //
// // // // // let kolyadnik = new User('Ivan', 48);
// // // // //
// // // // // kolyadnik.colyaduvatu();
// // // // // kolyadnik.eatKutya();
// // // // //
// // // // //
// // // // // let x = new User();
// // // // //
// // // // // //
// // // // // //
// // // // // //
// // // // // // // CALL
// // // // // // let worker1 = {
// // // // // //     name: 'Anna',
// // // // // //     position: 'PM',
// // // // // //     money: 1000
// // // // // // };
// // // // // //
// // // // // // let worker2 = {
// // // // // //     name: 'Dima',
// // // // // //     position: 'Student',
// // // // // //     money: 0
// // // // // // };
// // // // // //
// // // // // // function levelUP(newPosition, newMoney) {
// // // // // //     this.position = newPosition;
// // // // // //     this.money += newMoney
// // // // // // }
// // // // // //
// // // // // // levelUP.call(worker1, 'Senior', -200);
// // // // // // levelUP.call(worker2, 'Trainee', 200);
// // // // // //
// // // // // // console.log(worker1);
// // // // // // console.log(worker2);
// // // // // // //
// // // // // // //APPLY
// // // // // // // Приймає в себе масив значень. Потім їх розкриває
// // // // // // levelUP.apply(worker1, ['CEO' , 500])
// // // // // // levelUP.apply(worker2, ['Jun' , 100])
// // // // // //
// // // // // // console.log(worker1);
// // // // // // console.log(worker2);
// // // // // // // //
// // // // // // // // BIND
// // // // // // // let newWorker1 = levelUP.bind(worker1, 'CEO', 2000);
// // // // // // // let newWorker2 = levelUP.bind(worker2, 'MID', 1000);
// // // // // // //
// // // // // // // console.log(worker1);
// // // // // // // console.log(worker2);
// // // // // // //
// // // // // // // console.log(newWorker1());
// // // // // // // console.log(newWorker2());
// // // // //
// // // // //
// // // // // // 'MY STRING'.muSunc(); // -> `MY STRING_GNIRTS YM`
// // // // //
// // // // //
// // // //
// // // //
// // // // const number = [];
// // // //
// // // // for (let i = 10000; i < 99999; i++) {
// // // //     number.push(i)
// // // // }
// // // //
// // // // function findPrime(arr) {
// // // //     for (let i = 0; i < arr.length; i++) {
// // // //         for (let j = 2; j < arr[i]; j++) {
// // // //             if (arr[i] % j === 0) {
// // // //                 arr.splice(i, 1);
// // // //                 i--;
// // // //             }
// // // //         }
// // // //     }
// // // // }
// // // //
// // // //
// // // // let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// // // //
// // // //
// // // // function multiplayer(arr) {
// // // //     const res = [];
// // // //
// // // //     for (let i = 0; i < arr.length / 2 + 1; i++) {
// // // //         for (const value of arr) {
// // // //             res.push(arr[i] * value)
// // // //         }
// // // //     }
// // // //
// // // //     return res;
// // // // }
// // // //
// // // // function findPolindrom(arr) {
// // // //     const polindroms = [];
// // // //
// // // //     for (const value of arr) {
// // // //         const reverse = value.toString().split('').reverse().join('');
// // // //
// // // //         if (value === +reverse) {
// // // //             polindroms.push(value)
// // // //         }
// // // //     }
// // // //
// // // //     return polindroms;
// // // // }
// // // //
// // // // findPrime(number);
// // // //
// // // // let multiplNums = multiplayer(number);
// // // //
// // // //
// // // // console.log(multiplNums);
// // // //
// // // // let polindroms = findPolindrom(multiplNums);
// // // //
// // // //
// // // // console.log('________________');
// // // // console.log(polindroms);
// // // //
// // // // let [biggest] = polindroms.sort((a, b) => b - a);
// // // //
// // // //
// // // // console.log(biggest);
// // //
// // // // Унаследовать класс Car в классе SuperCar. Добавить 3 новых поля
// // //
// // // // на основе предыдущего задания создать классы которые описывают
// // // // - Продукт - категорию - Магазин на рахунок магазину поясни будь ласка
// // //
// // // class Car {
// // //     constructor(price, color, model) {
// // //         this.price = price
// // //         this.color = color
// // //         this.model = model
// // //     }
// // //
// // //     bzzzz() {
// // //         console.log(`BIP BIP I AM JEEP`);
// // //     }
// // //
// // //     polamayusya() {
// // //         console.log(`REPAIR WILL COST ${this.price / 20} FOR YOY`);
// // //     }
// // // }
// // //
// // // class SuperCar extends Car {
// // //
// // //     constructor(price, color, model, speed, power, magic) {
// // //         super(price, color, model);
// // //         this.speed = speed
// // //         this.power = power
// // //         this.magic = magic
// // //     }
// // //
// // //     race() {
// // //         console.log(`BZZZZZ IWTH ${this.speed} AND ${this.magic}`);
// // //     }
// // // }
// // //
// // // let lanos = new Car(3000, 'coffewithmilk', 'Lanis');
// // //
// // // lanos.polamayusya();
// // //
// // // let XC90 = new SuperCar(18000, "white", 'Volvo', 160, 100, 'LEVIOSSA');
// // //
// // // XC90.race();
// //
// //
// // console.log('----------------10 классов Пользователей ----------');
// //
// // class User {
// //     constructor(name, surname, gender, age, family_status, skill, level, access) {
// //         this.name = name;
// //         this.surname = surname;
// //         this.gender = gender;
// //         this.age = age;
// //         this.family_status = family_status;
// //         this.skill = skill;
// //         this.level = level;
// //         this.access = access;
// //     }
// //
// //     toString2() {
// //         return this
// //     };
// // }
// //
// // let name = ['Alex', 'Igor', 'Vlad', 'Viktor', 'Anna', 'Tatyana', 'Nikolay', 'Nastya', 'Lena', 'Oleg'];
// // let surname = ['Chmuriy', 'Vasilenko', 'Ivanov', 'Petrov', 'Zaharova', 'Andreeva', 'Sidorov', 'Baranova', 'Belova', 'Slusar'];
// // let gender = ['male', 'male', 'male', 'male', 'female', 'female', 'male', 'female', 'female', 'male'];
// // let age = [67, 63, 25, 31, 19, 24, 36, 22, 27, 32];
// // let skill = ['JS', 'JAVA', 'JS', 'CSS', 'JS', 'CSS', 'HTML', 'JS', 'JAVA', 'JS'];
// // let level = [4, 6, 8, 10, 9, 7, 3, 5, 6, 10];
// // let access = [false, true, true, true, true, false, false, true, true, true];
// // let family_status = ['married', 'married', 'single', 'married', 'single', 'single', 'married', 'single', 'married', 'married'];
// // let Users = [];
// // for (let i = 0; i < 10; i++) {
// //     Users[i] = new User(name[i], surname[i], gender[i], age[i], family_status[i], skill[i], level[i], access[i]);
// // }
// // // console.log(Users[0].toString());
// // //
// // // console.log('----------------сортировка классов Пользователей ----------');
// // //
// // function SortArray(item, arr) {
// //     arr.sort((a, b) => {
// //
// //         if (a[item] > b[item]) {
// //             return 1
// //         } else {
// //             return -1
// //         }
// //     });
// // }
// //
// // console.log('-------------Пример: сортировка по имени Пользователей ----------');
// // SortArray('name', Users)
// // console.log(Users);
// //
// // console.log('-------------Пример: сортировка по возрасту Пользователей -------');
// // SortArray('age', Users)
// // console.log(Users);
//
//
//
// let arr = [1,3,4,54,65,6756,765,7];
// // let arr = ['WWWW',"b",'a','54','4000000000000','HELLO','cccc'];
// //
// // arr.sort((a, b) => {
// //     if (a.toLowerCase() > b.toLowerCase()) {
// //         return -1
// //     } else {
// //         return 1
// //     }
// // });
//
//
// let filter = arr.filter(value => {
//     if (value > 10) {
//         return value
//     }
// });
//
// console.log(filter);
class Product {
    constructor(price) {
    }
}

class Categore {
    constructor(products) {
    }
}

class Ashan {
    constructor(categories) {
    }
}


