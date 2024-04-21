#! /usr/bin/env  node
import inquirer from 'inquirer';
const todoList = [];
let condition = true;
while (condition) {
    let todo = await inquirer.prompt([
        {
            name: 'todo_menu',
            type: 'list',
            message: 'Please Select Option For Todo List',
            choices: ['Add', 'View', 'Update', 'Delete']
        }
    ]);
    // **************   ADD part STARTS here    ***************************
    if (todo.todo_menu == 'Add') {
        let todo_add = await inquirer.prompt({
            name: 'todo_Q1',
            type: 'input',
            message: 'What do you want to add in your TODO LIST?'
        });
        todoList.push(todo_add.todo_Q1);
        console.log(todoList);
    }
    // ******************************************add part ends here***********************
    // ******************************************view part ends here***********************
    if (todo.todo_menu == 'View') {
        todoList.forEach(element => console.log(element)); // arrow function of forEach method.
        /*for (let index in todoList){
           console.log(todoList[index]);} */
    }
    // ******************************************view part ends here***********************
    if (todo.todo_menu == 'Update') {
        let todo_update = await inquirer.prompt({
            name: 'todo_up',
            type: 'list',
            message: 'Please select list item to UPDATE.',
            choices: todoList.map(item => item)
        });
        let todo_news = await inquirer.prompt({
            name: 'todo_new',
            type: 'input',
            message: 'Please enter new item to ADD.'
        });
        todoList.splice(todoList.indexOf(todo_update.todo_up), 1, todo_news.todo_new); //this one line power code will update the new item in list
        console.log(todoList);
    }
    ;
    if (todo.todo_menu == 'Delete') {
        let todo_delete = await inquirer.prompt({
            name: 'todo_del',
            type: 'list',
            message: 'Please select list item to DELETE.',
            choices: todoList.map(item => item)
        });
        todoList.splice(todoList.indexOf(todo_delete.todo_del), 1); //this one line power code will delete the selected item in list
        console.log('Item Deleted Successfully.');
        console.log(todoList);
    }
    ;
    // <<<<----------------------MORE TASK STARTS HERE---------------------------->>>>
    let todoMore = await inquirer.prompt([
        {
            name: 'todo_more',
            type: 'confirm',
            message: 'Would you like to do more in your TODO LIST?',
            default: 'false'
        }
    ]);
    condition = todoMore.todo_more;
    // <<<<----------------------MORE TASK ENDS HERE---------------------------->>>> 
    // while condition curly braket ends here.......
}
