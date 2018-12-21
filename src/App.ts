import chalk from 'chalk'
import figlet from 'figlet'

function welcome() {
  console.log(
    chalk.magenta(
      figlet.textSync("Video Porter", {
        font: "Ghost",
        horizontalLayout: "default",
        verticalLayout: "default"
      })
    )
  )
}

function start() {
  welcome()
}

start()