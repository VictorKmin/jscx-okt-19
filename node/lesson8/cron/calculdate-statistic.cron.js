const {userService} = require('../service')

module.exports = async () => {
    // тут рахуємо шось важне )
    let newVar = await userService.getUsers();

    console.log(newVar.length)
}
