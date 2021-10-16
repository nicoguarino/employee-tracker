const inquirer = require('inquirer');
const mysql = require('mysql2');
const DB = require('./db');

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
                employee.listAllEmployees();
                init();
                break;
            case "View All Departments":
                department.listAllDepartments();
                init();
                break;
            case "View All Roles":
                role.listAllRoles();
                init();
                break;
             case "Add Employee":
                employee.addEmployee();
                init();
                break;
            case "Add Department":
                department.addDepartment();
                init();
                break;
            case "Add Role":
                role.addRole();
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

// add functions
function addEmployee() {
    
}

function addDepartment() {
    
}

function addRole() {
    
}

// update employee function
function updateEmployee() {
    
}

init();