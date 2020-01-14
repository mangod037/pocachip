const chalk = require("chalk");

const { record, randomName } = require("./record.js")
const order = require("./order.js")

record().catch(e => console.log(e))
setTimeout(() => order(randomName).catch(console.error), 4000)
console.log(chalk.yellow.inverse("File name: " + randomName))