const bcrypt = require('bcrypt');

module.exports = (password) => {
    return bcrypt.hash(password, 10);
};
