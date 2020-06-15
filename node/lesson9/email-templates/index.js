const {emailActionEnum} = require('../constants')

module.exports = {
  [emailActionEnum.USER_REGISTER]: {
    subject: '[NUDE SHOP] Weclome',
    templateFileName: 'welocme'
  },
  [emailActionEnum.USER_FORGOT_PASS]: {
    subject: '[NUDE SHOP] Forgot pass',
    templateFileName: 'userForgotPass'
  }
}
