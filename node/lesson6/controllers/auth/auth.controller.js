const {requestHeadersEnum, responseStatusCodesEnum} = require('../../constants')
const {tokinizer, checkHashPassword} = require('../../helpers')
const {ErrorHandler, error} = require('../../error')
const {authService, userService} = require('../../service')

module.exports = {
    loginUser: async (req, res, next) => {
        try {
            const {email, password} = req.body;
            const user = await userService.getUserByParams({email});

            if (!user) {
                return next(new ErrorHandler('NO USER', 404, 4041));
            }

            await checkHashPassword(user.password, password);

            const tokens = tokinizer();

            await authService.createTokenPair({...tokens, userId: user.id});

            res.json(tokens);
        } catch (e) {
            next(e)
        }
    },

    logoutUser: async (req, res) => {
        const access_token = req.get(requestHeadersEnum.AUTHORIZATION);

        await authService.deleteByParams({access_token});

        res.sendStatus(200);
    },

    refreshToken: async (req, res, next) => {
        try {
            const refresh_token = req.get(requestHeadersEnum.AUTHORIZATION);
            const userId = req.userId;

            const user = await userService.getUserById(userId);

            if (!user) {
                return next(
                    new ErrorHandler(error.NOT_FOUND.message, responseStatusCodesEnum.NOT_FOUND, error.NOT_FOUND.code)
                )
            }

            const tokens = tokinizer();

            await authService.deleteByParams({refresh_token});
            await authService.createTokenPair(tokens);

            res.json(tokens);
        } catch (e) {
            next(e)
        }
    }
};
