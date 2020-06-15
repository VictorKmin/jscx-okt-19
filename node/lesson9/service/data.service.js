const db = require('../dataBase').getInstance();

module.exports = {
    getRoles: () => {
        const RoleModel = db.getModel('Roles');
        const TokenModel = db.getModel('Token');

        console.log(RoleModel);
        console.log(TokenModel);

        return RoleModel.findAll({
            raw: true
        })
    },

    insertRoles: (roles) => {
        const RoleModel = db.getModel('Roles');

        return RoleModel.bulkCreate(roles)
    }
};
