const {Router} = require('express');

const userRouter = Router();

const {userController} = require('../../controllers')
const checkUserValidity = require('../../middlewares/user/check-is-user-valid.middleware')
const {authMiddleware, fileMiddleware} = require('../../middlewares')


userRouter.post(
  '/',
  checkUserValidity,
  fileMiddleware.fileCheckerMiddleware,
  fileMiddleware.checkUserPhotoCountMiddleware,
  userController.createUser
);

userRouter.get('/', userController.getAllUsers);


userRouter.delete('/:name', userController.deleteUser);


// userRouter.get('/profile', authMiddleware.checkAccessToken, userController.getUserProfile)


module.exports = userRouter;
