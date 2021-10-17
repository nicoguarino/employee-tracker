const inquirer = require('inquirer');
const mysql = require('mysql2');
const DB = require('./db/connection');

const Employee = require('./lib/Employee');
const Role = require('./lib/Role');
const Department = require('./lib/Department');

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
            switch (selectOption.selectOption) {
                case "View All Employees":
                    let employee = new Employee(DB);
                    employee.listAllEmployees();
                    init();
                    break;
                case "View All Departments":
                    listAllDepartments();
                    init();
                    break;
                case "View All Roles":
                    listAllRoles();
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
                            let employee = new Employee(DB);
                            employee.addEmployee(data.firstName, data.lastName, roleId, managerId);
                            init();
                        });
                }
            );
        }
    );
}

function newDepartment() {
    inquirer.prompt({
        name: 'department',
        type: 'input',
        message: 'What new department would you like to add?'
    })
        .then((data) => {
            addDepartment(data.department);
            init();
        });
}

function newRole() {
    let departHolder = [];

    DB.query('SELECT * FROM department',
        function (err, res) {
            if (err) {
                console.log(err);
            }
            for (let index = 0; index < res.length; index++) {
                if (res[index].name) {
                    departHolder.push(res[index].name);
                }
            }

            inquirer.prompt([
                {
                    name: 'title',
                    type: 'input',
                    message: 'What is the tile of the new role?'
                },
                {
                    name: 'salary',
                    type: 'input',
                    message: 'what is the salary of the new role?'
                },
                {
                    name: 'department',
                    type: 'list',
                    message: 'What department is the new role in?',
                    choices: departHolder
                }
            ])
            .then((data) => {
                let departmentId = null;
                for (let index = 0; index < res.length; index++) {
                    if (res[index].name === data.department) {
                        departmentId = res[index].id;
                        break;
                    }
                }
                addRole(data.title, data.salary, departmentId)
                init();
            })
        }
    );
}

// update employee function
function updateEmployee() {
    let roleHolder = [];
    let empHolder = [];

    DB.query('SELECT * FROM role',
        function (err, res) {
            if (err) {
                console.log(err);
            }
            for (let index = 0; index < res.length; index++) {
                if (res[index.title]) {
                    roleHolder.push(res[index].title);
                }  
            }

            DB.query('SELECT * FROM employee',
                function (err, res) {
                    if (err) {
                        console.log(err);
                    }
                    for (let index = 0; index < res.length; index++) {
                        if (res[index].first_name) {
                            empHolder.push(res[index].first_name + ' ' + res[index].last_name);
                        }
                    }

                    inquirer.prompt([
                        {
                            name: 'employee',
                            type: 'list',
                            message: 'What employee whose role would you like to update?',
                            choices: empHolder
                        },
                        {
                            name: 'role',
                            type: 'list',
                            message: 'What is the new role the employee will fill?',
                            choices: roleHolder
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

                        for (let index = 0; index < res.length; index++) {
                            if (res[index].first_name + ' ' + res[index].last_name === data.employee) {
                                setProperties(res[index]);
                                updateEmployee();
                                break;
                            }
                        }
                        init();
                    });
                }
            );
        }
    );
}

init();