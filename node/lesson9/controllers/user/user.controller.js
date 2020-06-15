const fs = require('fs-extra').promises;
const path = require('path');
const uuid = require('uuid').v1();

const {emailActionEnum} = require('../../constants')
const {emailService, userService} = require('../../service')
const {hashPassword, checkHashPassword} = require('../../helpers')
const ErrorHandler = require('../../error/ErrorHandler')

module.exports = {
    getAllUsers: async (req, res) => {
        let products = await userService.getUsers();

        res.json(products)
    },
    getUserProfile: (req, res) => {
        res.json(req.user)
    },


    deleteUser: (req, res) => {
        const params = req.params
        const query = req.query;

        res.json({params, query})
    },

    createUser: async (req, res) => {
        try {
            const user = req.body;
            const [avatar] = req.photos;
            const hashedPassword = await hashPassword(user.password)

            user.password = hashedPassword;

            const {id} = await userService.createUser(user);

            if (avatar) {
                const photoDir = `users/${id}/photos`;
                const fileExtension = avatar.name.split('.').pop();
                const photoName = `${uuid}.${fileExtension}`

                await fs.mkdir(path.resolve(process.cwd(), 'public', photoDir), {recursive: true})
                await avatar.mv(path.resolve(process.cwd(), 'public', photoDir, photoName));
                await userService.updateUserById(id, {photo: `/${photoDir}/${photoName}`})
            }

            await emailService.sendMail(
                user.email,
                emailActionEnum.USER_REGISTER,
                {userName: user.name}
            )
        } catch (e) {
            res.json(e)
        }

        res.end()
    },

    loginUser: async (req, res, next) => {

        const {email, password} = req.body;

        const user = await userService.getUserByParams({email});

        if (!user) {
            return next(new ErrorHandler('User is not found', 404, 4041));
        }

        await checkHashPassword(user.password, password);

        res.json(user);
    }
};
