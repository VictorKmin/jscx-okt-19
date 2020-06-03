const db = require('../dataBase').getInstance();

module.exports = {
    getTokensByParams: (params) => {
        const TokenModel = db.getModel('Token');

        return TokenModel.findOne({
            where: params
        })
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
