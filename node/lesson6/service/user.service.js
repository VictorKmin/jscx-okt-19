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

    getUserById: (id) => {
        const UserModel = db.getModel('User');

        return UserModel.findByPk(id)
    },

    createUser: (user) => {
        const UserModel = db.getModel('User');

        return UserModel.create(user)
    }

};
