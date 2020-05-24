const {readFile, appendFile} = require('fs');
const path = require('path');

const usersPath = path.join(process.cwd(), 'users.txt');

class UserService {

    getUsers() {
        console.log(usersPath);
        let users = [];

        return new Promise((resolve, reject) => {
            readFile(usersPath, (error, JSONUsers) => {

                if (error) {
                    reject('Cant read file (')
                }
                let JSONArr = JSONUsers.toString().split('\n');

                JSONArr.forEach(jsonUser => {
                    if (!jsonUser) {
                        return
                    }
                    users.push(JSON.parse(jsonUser))
                })

                console.log(users);
                resolve(users);
            })
        })
    }

    createUser(user) {
        const userToPush = JSON.stringify(user);

        return new Promise((resolve, reject) => {
            appendFile(usersPath, `\n${userToPush}`, (err) => {
                if (err) {
                    console.log(err);
                    reject('Cant write user')
                }
                resolve()
            })
        })
    }
}

module.exports = new UserService;
