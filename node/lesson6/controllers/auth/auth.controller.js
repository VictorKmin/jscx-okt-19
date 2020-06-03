const {authService, userService} = require('../../service')
const {tokinizer, checkHashPassword} = require('../../helpers')
const ErrorHandler = require('../../error/ErrorHandler')

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
        const access_token = req.get('Authorization');

        await authService.deleteByParams({access_token});

        res.sendStatus(200);
    }
};
