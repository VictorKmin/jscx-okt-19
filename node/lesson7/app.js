const express = require('express');
const exprsBars = require('express-handlebars');
const path = require('path');
const morgan = require('morgan');
const dotenv = require('dotenv');

dotenv.config()

const {PORT} = require('./config');

const db = require('./dataBase').getInstance();
db.setModels();

const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.use(express.static(path.join(__dirname, 'views')));
app.use(morgan('dev'))

app.engine('.hbs', exprsBars({
    defaultLayout: false,
    extname: '.hbs'
}))

app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views'));

const {authRouter, productRouter, userRouter} = require('./routes');

app.use('/auth', authRouter)
app.use('/users', userRouter);
app.use('/products', productRouter);

app.use('*', (err, req, res, next) => {
    let message = err.message

    if (err.parent) {
        message = err.parent.sqlMessage
    }
    res
        .status(err.status || 400)
        .json({
            message,
            code: err.customCode
        })
})

// // MYSQL2
//
// app.post('/mysql', (req, res) => {
//     connection.query(`INSERT INTO users (name, email, password) VALUES ('${req.body.name}', '${req.body.email}', '${req.body.password}')`)
//
//     connection.query('SELECT * FROM users', (err, results) => {
//         res.json(results)
//     })
// })

app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Listen ${PORT}...`);
    }
});


process.on("unhandledRejection", reason => {
    console.log('_______________________');
    console.log(reason);
    console.log('_______________________');

    process.exit(0)
})

