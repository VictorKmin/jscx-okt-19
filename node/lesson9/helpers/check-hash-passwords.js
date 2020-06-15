const bcrypt = require('bcrypt')

/**
 * This function using for hashing password
 *
 * @param hashedPassword - password form DB
 * @param password - inputted password to compare with hashedPassword
 *
 * @returns {Promise<void>}
 */
module.exports = async (hashedPassword, password) => {
    const isPasswordsEquals = await bcrypt.compare(password, hashedPassword);

    // if not present ---> Так не робіть. Це ту мач
    if (!isPasswordsEquals) {
        // throw error
        throw new Error('User is not exist');
    }
}
