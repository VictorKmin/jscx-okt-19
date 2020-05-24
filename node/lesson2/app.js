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
const {createUser, getUsers} = require('./service/user.service')

const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.use(express.static(path.join(__dirname, 'views')));


app.engine('.hbs', exprsBars({
    defaultLayout: false,
    extname: '.hbs'
}))

app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('main', {name: 'Viktor', showed: true})
})

app.get('/users', async (req, res) => {
    const users = await getUsers()

    res.render('users', {users})
})


app.get('/register', (req, res) => {
    res.render('register')
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.post('/auth', (req, res) => {
    const {email, password} = req.body;
    const user = users.find(user => user.email === email);

    if (!user) {
        return res.render('error', {message: 'Wrong email or password'})
    }
    // hash password -> hash string

    if (user.password !== password) {
        return res.render('error', {message: 'Wrong email or password'})
    }

    res.json({email, name: user.name});
})


app.post('/reg', async (req, res) => {
    await createUser(req.body);

    res.redirect('/users')
})

app.listen(5000, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Listen 5000...');
    }
})
