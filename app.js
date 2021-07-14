/* 
Author: Ngozi Young
Date: July 13, 2021
Description: A simple console todo list web application that prompts user to enter a command: new, list, delete, or quit. Description of each command is displayed on the page. Open the console to see the application messages displayed to the console after each command is executed.
*/

let userInput = prompt("What would you like to do?");
const todoList = [];

// Application will quit when 'quit' is entered. Case is not senstive for any entered commands.
while (userInput.toLowerCase() !== 'quit') {
    if (userInput.toLowerCase() === 'new') {
        userInput = prompt("Enter new todo");
        todoList.push(userInput);
        console.log(`${userInput} added to list`);
    } else if (userInput.toLowerCase() === 'list') {
        // Checks whether todo list is empty before listing all todos
        if (todoList.toString() !== '') {
            console.log('*********');
            for (const [index, element] of todoList.entries()) {
                console.log(`[${index}]: ${element}`);
            }
            console.log('*********');
        } else {
            console.log('The Todo List is empty');
        }
    } else if (userInput.toLowerCase() === 'delete') {
        // Checks whether todo list is empty before deleting a todo
        if (todoList.toString() !== '') {
            userInput = parseInt(prompt("Enter the index of todo to delete"));
            let removed = todoList.splice(userInput, 1);
            console.log(`${removed} removed from list`)
        } else {
            console.log('The Todo List is empty');
        }
    } else {
        userInput = prompt("Please enter a valid command");
    }
    // User is continuously prompted to enter a command until 'quit' is entered
    userInput = prompt("What would you like to do?");
}
console.log('OK, YOU QUIT THE APP');