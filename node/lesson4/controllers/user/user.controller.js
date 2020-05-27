const {userService} = require('../../service')

module.exports = {
    getAllUsers: async (req, res) => {
        let users = await userService.getUsers();

        res.json(users)
        // res.render('users', {users})
    },

    updateUser: (req, res) => {
        res.end('PUT users')
    },

    deleteUser: (req, res) => {
        const params = req.params
        const query = req.query;

        res.json({params, query})
    },

    createUser: async (req, res) => {
        try {
            await userService.createUser(req.body);
        } catch (e) {
            res.json(e)
        }

        res.end()
        // res.redirect('/users')
    }
};
