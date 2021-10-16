const inquirer = require('inquirer');
const mysql = require('mysql2');
const db = require('./db');

const employee = require('./lib/Employee');
const role = require('./lib/Role');
const department = require('./lib/Department');



// presented with the following options
function init() {
   inquirer.prompt({
       name: 'selectOption',
       type: 'list',
       message: 'Select Option to you would like to perform.',
       choices: [
        'View All Employees',
        'View All Departments',
        'View All Roles',
        'Add Employee',
        'Add Department',
        'Add Role',
        'Update Employee',
        'Exit'
       ]
   })
   .then((selectOption) => {
       switch (selectOption) {
            case "View All Employees":
                
                init();
                break;
            case "View All Departments":
                
                init();
                break;
            case "View All Roles":
            
                init();
                break;
             case "Add Employee":
            
                init();
                break;
            case "Add Department":
            
                init();
                break;
            case "Add Role":
            
                init();
                break;
            case "Update Employee":
            
                init();
                break;
            case "Exit":
                console.log('Thank you for using Employee Tracker');
                break;
            default:

                init();
                break;
       }
   });

}

