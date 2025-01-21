const inquirer = require('inquirer')
const colors = require('colors')
const KeyManager = require('../lib/keyManager')
const {isRequired} = require('../utils/validation')


const key = {
    async set() {
        const keyManager = new KeyManager()
        const input = await inquirer.prompt([
            {
                type: 'input',
                name: 'key',
                message: 'Enter API Key '.green + "https://nomics.com",
                validate: isRequired
            }
        ])

        const key = keyManager.setKey(input.key)

        if(key){
            console.log('API Key Set'.blue)
        }
    },
    show() {
        console.log('Hello from show')
    },
    remove() {
        console.log('Hello from remove')
    }
}

module.exports = key;