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
                    newEmployee();
                    init();
                    break;
                case "Add Department":
                    newDepartment();
                    init();
                    break;
                case "Add Role":
                    newRole();
                    init();
                    break;
                case "Update Employee":
                    updateEmployee();
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
function newEmployee() {
    const emproles = [];
    const manager = [];

    DB.query('SELECT * FROM role ',
        function (err, res) {
            if (err) {
                console.log(err);
            }
            for (let index = 0; index < res.length; index++) {
                if (res[index].title) {
                    emproles.push(res[index].title);
                }

            }
            DB.query('SELECT * FROM employee ',
                function (err, res) {
                    if (err) {
                        console.log(err);
                    }
                    for (let index = 0; index < res.length; index++) {
                        if (res[index].first_name) {
                            manager.push(res[index].first_name + ' ' + res[index].last_name);
                        }
                    }
                    inquirer.prompt([
                        {
                            name: 'firstName',
                            type: 'input',
                            message: 'What is new employee first name?'
                        },
                        {
                            name: 'lastName',
                            type: 'input',
                            message: 'What is new employee last name?'
                        },
                        {
                            name: 'role',
                            type: 'list',
                            choices: emproles
                        },
                        {
                            name: 'manager',
                            type: 'list',
                            choices: manager
                        }
                    ])
                    .then((data) => {
                        let roleId = null;
                        for (let index = 0; index < res.length; index++) {
                            if (res[index].title === data.role) {
                                roleId = res[index].id;
                                break;
                            }
                        }

                        let managerId = null;
                        for (let index = 0; index < res.length; index++) {
                            if (res[index].first_name + ' ' + res[index].last_name === data.manager) {
                                managerId = res[index].id;
                                break;
                            }
                        }
                        employee.addEmployee(data.firstName, data.lastName, roleId, managerId);
                        init();
                    });
                }
            );
        }
    );
}

function newDepartment() {

}

function newRole() {

}

// update employee function
function updateEmployee() {

}

init();