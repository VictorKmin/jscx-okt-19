const {ErrorHandler} = require('../../error')
const {filesOptionsEnum, responseStatusCodesEnum} = require('../../constants')

module.exports = (req, res, next) => {
  req.photos = [];
  req.docs = [];

  if (!req.files) {
    return next();
  }

  const files = Object.values(req.files);

  for (let i = 0; i < files.length; i++) {
    const {size, mimetype, name} = files[i]

    if (filesOptionsEnum.PHOTO_MIMETYPES.includes(mimetype)) {

      if (size > filesOptionsEnum.MAX_PHOTO_SIZE) {
        return next(
          new ErrorHandler(`Max file size is ${filesOptionsEnum.MAX_PHOTO_SIZE}`, responseStatusCodesEnum.BAD_REQUEST)
        )
      }

      req.photos.push(files[i])
    }

    else if (filesOptionsEnum.DOC_MIMETYPES.includes(mimetype)) {
      if (size > filesOptionsEnum.MAX_DOC_SIZE) {
        return next(
          new ErrorHandler(`Max file size is ${filesOptionsEnum.MAX_DOC_SIZE}`, responseStatusCodesEnum.BAD_REQUEST)
        )
      }

      req.docs.push(files[i])
    }

    else {
      next(new ErrorHandler(`File ${name} is not valid`, responseStatusCodesEnum.BAD_REQUEST))
    }
  }

  next();
}
