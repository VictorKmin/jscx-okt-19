const {dataService} = require('../service')
const {roleEnum} = require('../constants')

module.exports = async () => {
    const roles = await dataService.getRoles();

    if (!roles.length) {
        const roles = Object.values(roleEnum);

        console.log(roles);

        const rolesToInsert = roles.map((title, index) => {
            return {id: index+1, title}
        });

        console.log(rolesToInsert);
        await dataService.insertRoles(rolesToInsert)
    }
}