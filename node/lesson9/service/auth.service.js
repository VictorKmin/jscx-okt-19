const db = require('../dataBase').getInstance();

module.exports = {
    getTokensByParams: async (params) => {
        const TokenModel = db.getModel('Token');
        const UserModel = db.getModel('User');

        const userFormToken = await TokenModel.findOne({
            where: params,
            attributes: [],
            include: [{
                model: UserModel,
                as: 'user',
                attributes: ['id', 'name', 'email']
            }],
            raw: true,
            nest: true
        })

        return userFormToken;
    },

    deleteByParams: (params) => {
        const TokenModel = db.getModel('Token');

        return TokenModel.destroy({
            where: params
        })
    },

    createTokenPair: (tokens) => {
        const TokenModel = db.getModel('Token');

        return TokenModel.create(tokens);
    }
};
