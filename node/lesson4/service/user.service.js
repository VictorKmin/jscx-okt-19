// getUsers
// createUser

const db = require('../dataBase').getInstance();

module.exports = {
    getUsers: () => {
        const UserModel = db.getModel('User');

        return UserModel.findAll({})
    },

    createUser: (email, name, password) => {
        const UserModel = db.getModel('User');

        return UserModel.create({email, name, password})
    }

};
