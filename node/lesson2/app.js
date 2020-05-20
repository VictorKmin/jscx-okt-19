// // const {EventEmitter} = require('events');
// //
// // const ee = new EventEmitter;
// //
// // ee.on('hello', () => {
// //     console.log('HELLO WORLD')
// // });
// //
// ee.once('test', (firstArg, secondAgr) => {
// //     console.log('TEST EVENT')
// //     console.log(firstArg)
// //     console.log(secondAgr)
// // });
// //
// //
// // ee.emit('test', 'one', 222222222222)
// // //
// // //
// // // console.log(ee.listenerCount('test'));
// // // console.log(ee.listenerCount('hello'));
//
// const fs = require('fs');
//
// let writeStream = fs.createWriteStream('./headline_profile_copy.pdf');
// // for (let i = 0; i < 1000000; i++) {
// //     writeStream.write('Lorem sdfn fnsdfns sfo ffso fofsd fsdfo fsfsd fosd fsod fsfsdf')
// // }
//
// let readStream = fs.createReadStream('./headline_profile.mp4');
//
//
// // readStream.on('data', (chunk) => {
// //     console.log(chunk);
// //     console.log('________________________________________');
// // })
// //
// //
// // readStream.on('end', () => {
// //     console.log('EnD READING');
// // })
//
//
// // readStream.on('data', chunk => {
// //     writeStream.write(chunk.toString())
// // })
//
// readStream.pipe(writeStream)

const express = require('express');
const exprsBars = require('express-handlebars');
const path = require('path');

const app = express();

const users = [
    {
        name: "Dima",
        age: 22
    },
    {
        name: "Vova",
        age: 44
    },
]

app.use(express.json());
app.use(express.urlencoded());

express.static(path.join(__dirname, 'views'));


app.engine('.hbs', exprsBars({
    defaultLayout: false,
    extname: '.hbs'
}))

app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('main', {name: 'Viktor', showed: false})
})


app.get('/users', (req, res) => {
    // res.write('HELLO WORLD');
    // res.write('HELLO WORLD  2222');
    // res.write('HELLO WORLD  33333');
    // res.write('HELLO WORLD  4444');
    // res.end()

    res.render('users', {users})
})


app.get('/register', (req, res) => {
    res.render('register')
})


app.post('/reg', (req, res) => {
    console.log(req.body);

    res.end()
})

app.listen(5000, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Listen 5000...');
    }
})
