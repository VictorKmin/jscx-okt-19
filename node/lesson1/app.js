const path = require('path');
const fs = require('fs');

const {calculate} = require('./dir1/mine');
//
//
let number = calculate(10, 40);
//
console.log(number);


// fs.writeFile(path.join(__dirname, 'files', 'data.txt'), 'HELLO WORLD \n', err => {
//         console.log(err);
//     })

// for (let i = 0; i < 100; i++) {
//     fs.appendFile(path.join(__dirname, 'files', 'data.txt'), 'HELLO WORLD \n',err => {
//         console.log(err);
//     })
// }

// fs.readFile(path.join(__dirname, 'zoom_0.mp4'), (err, data) => {
//     console.log(data);
// })


// fs.stat(path.join(__dirname, 'zoom_0.mp4'), (err, stats) => {
//     console.log(stats);
// })


// fs.mkdir(path.join(__dirname, 'zoom'), err => {
//     console.log(err);
// })


// fs.rmdir(path.join(__dirname, 'zoom'), err => {
//     console.log(err);
// })


// fs.readdir(path.join(__dirname, 'zoom'), (err, files) => {
//     console.log(files);
// });
//
//
// fs.stat(path.join(__dirname, 'app.js'), (err, stats)=> {
//     console.log(stats.isDirectory());
// })


// fs.unlink(path.join(__dirname, 'xxx.txt'), err => {
//     console.log(err);
// });


//
// fs.rename(path.join(__dirname, 'helloWorld.txt'), path.join(__dirname, 'video.mp4'), err => {
//     console.log(err);
// })


fs.truncate(path.join(__dirname, 'video.txt'), 2, err => {
    console.log(err);
})


SOLID
