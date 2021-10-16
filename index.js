const inquirer = require('inquirer');
const db = require('./db');

// presented with the followering options


// initial prompts
const userPrompts = () => {
    inquirer.prompt({
            type: 'list',
            name: 'action',
            message: 'What would you like to do?',
            choices: ['View Tables', 'Add to Tables', 'Update an Employee']
    })
    .then( ({action}) => {
        switch (action) {
            case 'View Tables':
                // view tables function
                viewAll();
                break;
            case 'Add to Tables':
                // add to tables function
                add();
                break;
            case 'Update an Employee':
                // update employee function
                update();
                break;
        }
    });
};


const viewAll = () => {
    inquirer.prompt({
        type: 'list',
        name: 'view',
        message: 'What would you like to view?',
        choices: ['View All Departments', 'View All roles', 'View All Employees']
    })
    .then( ({view}) => {
        switch (view) {
            // view all departments

            case 'View All Departments':
                viewDepartments();
                break;
            // view all roles
            case 'View All roles':
                viewRoles();
                break;
            // view all Employees
            case 'View All Employees':
                viewEmployees();
                break;
        }
    });
}

const add = () => {
    inquirer.prompt({
        type: 'list',
        name: 'view',
        message: 'What would you like to add?',
        choices: ['Add a Department', 'Add a role', 'Add an Employee']
    })
    .then( ({view}) => {
        switch (view) {
            // add a department
            case 'Add a Department':
                addDepartment();
                break;
            // add a role
            case 'Add a role':
                addRole();
                break;
            // add an employee
            case 'Add an Employee':
                addEmployee();
                break;
        }
    });
}

const update = () => {
// update an employee role 
    // prompted to select an employee to update and their new role and this information is updated in the database

}

// functions to view tables 
const viewDepartments = () => {
    // when I view all departments I am presended with a formatted table showing department names and department ids
}

const viewRoles = () => {
    // the job title, role id, the department that role belongs to, and the salary for that role
}

const viewEmployees = () => {
    // presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to

}

// functions to add 
const addDepartment = () => {
    // prompted to enter the name of the department and that department is added to the database
    inquirer.prompt({
        type: 'input',
        name: 'name',
        message: 'What is the name of the department you would like to add?',
        validate: nameInput  => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter the Department name.');
                return false;
            }
        }
    })
    // add a .then to push the data to the database
}

const addRole = () => {
    // prompted to enter the name, salary, and department for the role and that role is added to the database
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the Role you would like to add?',
            validate: nameInput  => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the Role name.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'salary',
            message: 'What is the salary for new role?',
            validate: salaryInput  => {
                if (salaryInput) {
                    return true;
                } else {
                    console.log('Please enter the salary of new role.');
                    return false;
                }
            }
        },
        {
            // should I display a list of departments to select from

        }
    ])
    // add a .then to push the data to the database
}

const addEmployee = () => {
    // prompted to enter the employee’s first name, last name, role, and manager and that employee is added to the database
    inquirer.prompt([
        {
            type: 'input',
            name: 'first_name',
            message: "What is the new Employee's first name?",
            validate: first_nameInput  => {
                if (first_nameInput) {
                    return true;
                } else {
                    console.log('Please enter Employees first name.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'last_name',
            message: "What is the new Employee's last name?",
            validate: last_nameInput  => {
                if (last_nameInput) {
                    return true;
                } else {
                    console.log('Please enter Employees last name.');
                    return false;
                }
            }
        },
        {
            // how to populate a list of roles
        },
        {
            // how to populate a list of managers
        }
    ])
    // add a .then to push the data to the database
}

//function to update employee
const updateEmployee = () => {
    // how to prompt a list of exsisting employees
}

//runs application
function init() {
    userPrompts();
}

init();


