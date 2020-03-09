const chalk = require("chalk")

// setTimeout(() => {
//   console.log(chalk.cyan("When will this happen?"))
// }, 0)
// console.log(chalk.green("This is strange timey wimey stuff."))

console.time("start")
setTimeout(() => {
  console.log(chalk.red("Hello 2003!"))
  let start = new Date();
  while ( new Date - start < 2000 ) {};
}, 1000)
setTimeout(() => {
  console.log(chalk.green("Hello 2003!"))
}, 1000)
setTimeout(() => {
  console.log(chalk.magenta("Hello 2003!"))
}, 1000)
setTimeout(() => {
  console.log(chalk.blue("Hello 2003!"))
}, 1000)
setTimeout(() => {
  console.log(chalk.white("Hello 2003!"))
}, 1000)
setTimeout(() => {
  console.log(chalk.yellow("Hello 2003!"))
}, 1000)
