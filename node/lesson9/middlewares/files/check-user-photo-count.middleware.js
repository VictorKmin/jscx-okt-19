const {ErrorHandler} = require('../../error')
const {responseStatusCodesEnum} = require('../../constants')

module.exports = (req, res, next) => {

  if (req.docs.length) {
    return next(new ErrorHandler('You can`t upload files to user', responseStatusCodesEnum.BAD_REQUEST));
  }

  if (req.photos.length > 1) {
    return next(new ErrorHandler('You can upload just one photo', responseStatusCodesEnum.BAD_REQUEST));
  }

  next();
}
