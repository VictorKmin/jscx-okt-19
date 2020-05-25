module.exports = (req, res, next) => {
    try {
        const {name, age, email, password} = req.body;
        console.log('______________________________________');
        console.log(name, age, email, password);
        console.log('______________________________________');


        if (!age || !name || !email || !password) {
            throw new Error('User is not valid')
        }

        if (age > 150 || age < 1) {
            throw new Error('Age is not valid')
        }

        if (password.length < 9) {
            throw new Error('Weak password')
        }

        next();

    } catch (e) {
        res.render('error', {message: e.message})
    }
}
