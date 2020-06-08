const jwt = require('jsonwebtoken');

const {
    wordsEnum: {JTW_SECRET},
    responseStatusCodesEnum
} = require('../../constants');
const {authService} = require('../../service');
const {ErrorHandler, error} = require('../../error');


module.exports = async (req, res, next) => {
    try {
        const token = req.get('Authorization');

        if (!token) {
            return next(new ErrorHandler('No token', 400, 4002));
        }

        jwt.verify(token, JTW_SECRET, err => {
            if (err) {
                return next(new ErrorHandler(
                    error.NOT_VALID_TOKEN.message,
                    responseStatusCodesEnum.UNAUTHORIZED,
                    error.NOT_VALID_TOKEN.code
                ));
            }
        });

        const tokensFromDB = await authService.getTokensByParams({access_token: token})

        if (!tokensFromDB) {
            return next(new ErrorHandler(
                error.NOT_VALID_TOKEN.message,
                responseStatusCodesEnum.UNAUTHORIZED,
                error.NOT_VALID_TOKEN.code
            ));
        }

        req.userId = tokensFromDB.userId
        next()
    } catch (e) {
        next(e)
    }
}
