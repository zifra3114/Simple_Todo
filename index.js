#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todos = [];
let condition = true;
while (condition) {
    let task = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "what you want to add in your list"
        },
        {
            name: "addMore",
            type: "confirm",
            message: "do you want to add more?",
            default: "false"
        }
    ]);
    todos.push(task.todo);
    condition = task.addMore;
    console.log(chalk.bgGreenBright(todos));
}
;
