const jwt = require('jsonwebtoken');

const {wordsEnum: {JTW_REFRESH_SECRET, JTW_SECRET}} = require('../constants');


module.exports = () => {
    const access_token = jwt.sign({}, JTW_SECRET, {expiresIn: '10m'})
    const refresh_token = jwt.sign({}, JTW_REFRESH_SECRET, {expiresIn: '1d'})

    return {
        access_token,
        refresh_token
    }
}
