// getUsers
// createUser

const db = require('../dataBase').getInstance();

module.exports = {
    getUsers: () => {
        const UserModel = db.getModel('User');

        return UserModel.findAll({})
    },

    getUserByParams: (params) => {
        const UserModel = db.getModel('User');

        return UserModel.findOne({
            where: params
        })
    },

    createUser: (user) => {
        const UserModel = db.getModel('User');

        return UserModel.create(user)
    }

};
