const {Router} = require('express');

const userRouter = Router();

const {userController} = require('../../controllers')
const checkUserValidity = require('../../middlewares/user/check-is-user-valid.middleware')


userRouter.post('/',
    checkUserValidity,
    userController.createUser);

userRouter.get('/', userController.getAllUsers);

userRouter.post('/auth', userController.loginUser);

userRouter.delete('/:name', userController.deleteUser);


module.exports = userRouter;
