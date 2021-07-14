/* 
Author: Ngozi Young
Date: July 13, 2021
Description: A simple console todo list web application that prompts user to enter a command: new, list, delete, or quit. Description of each command is displayed on the page. Open the console to see the application messages displayed to the console after each command is executed.
*/

let userInput = prompt("What would you like to do?");
const todoList = [];

// Application will quit when 'quit' is entered. Case is not senstive for any entered commands.
// && operator is correct because if 'q' is entered that means TRUE && FALSE = FALSE which will stop while loop. Otherwise if || operator is used then the expression would be TRUE || FALSE = TRUE and the loop would not stop.
while (userInput.toLowerCase() !== 'quit' && userInput.toLowerCase() !== 'q') {
    if (userInput.toLowerCase() === 'new') {
        const newTodo = prompt("Enter new todo");
        todoList.push(newTodo);
        console.log(`${newTodo} added to list`);
    } else if (userInput.toLowerCase() === 'list') {
        // Checks whether todo list is empty before listing all todos
        if (todoList.toString() !== '') {
            console.log('*********');
            for (const [index, element] of todoList.entries()) {
                console.log(`${index}: ${element}`);
            }
            console.log('*********');
        } else {
            console.log('The Todo List is empty');
        }
    } else if (userInput.toLowerCase() === 'delete') {
        // Checks whether todo list is empty before deleting a todo
        if (todoList.toString() !== '') {
            const index = parseInt(prompt("Enter the index of todo to delete"));
            if (!Number.isNaN(index)) {
                let deleted = todoList.splice(index, 1);
                console.log(`${deleted} removed from list`)
            } else {
                console.log('Invalid index entered');
            }
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