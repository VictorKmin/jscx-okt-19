// getUsers
// createUser

const db = require('../dataBase').getInstance();

module.exports = {
    getUsers: () => {
        const UserModel = db.getModel('User');

        return UserModel.findAll({})
    },

    createUser: (user) => {
        const UserModel = db.getModel('User');

        return UserModel.create(user)
    }

};
