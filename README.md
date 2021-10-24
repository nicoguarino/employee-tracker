# Employee Tracker

## Table of Contents

- [About](#about)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Code Sample](#code-sample)
- [Acknowledgement](#acknowledgement)
- [Contributing](#contributing)
- [License](#license)

## About <a name = "about"></a>

Employee Tracker is a node based program that uses Mysql to create a database of your companies employees, their roles, salaries, and departments. 

## Getting Started <a name = "getting-started"></a>

* [Git Hub Pull](https://github.com/nicoguarino/employee-tracker.git)
* [Walkthrough Video](https://watch.screencastify.com/v/OXZvhzHqJi7Z5E8bAPd4)

## Installation <a name = "installation"></a>

1. Download Node to be able to run application
2. Download Inquirer by npm i inquirer
3. Download MySQL2 by npm i MySQL2
4. Download console.table.package by npm i console.table.package
5. To run application type in the command line node index.js

## Code Sample <a name = "code-sample"></a>

![Sample Code](https://github.com/nicoguarino/team-profile-generator/blob/main/images/sample_code.png?raw=true "Sample Code")

### Sample Code
```JavaScript Sample
function newDepartment() {
    console.log('\n');
    inquirer.prompt({
        name: 'department',
        type: 'input',
        message: 'What new department would you like to add?'
    })
        .then((data) => {
            let department = new Department(DB);
            department.addDepartment(data.department);
            console.log('\n');
            console.table(department.listAllDepartments());
            console.log('\n');
            init();
        })
}
```
```MySql Sample
CREATE TABLE employee (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER,
    manager_id INTEGER,
    FOREIGN KEY (role_id) REFERENCES role(id) ON DELETE CASCADE,
    FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE CASCADE
);
```

## Authors and acknowledgement <a name = "acknowledgement"></a>

Nico (Filipu) Guarino


## Contributing <a name = "contributing"></a>

Employee Tracker is open for contrubiting, however check with the creator first before making any permanent changes. The creator is opening to creative ideas and tweeking of design, but it must be approved first.

## License <a name = "license">

(c) 2021 Employee Tracker
