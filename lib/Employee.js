const department = require('./Department');
const role = require('./Role');

class Employee {
    constructor(connection, id = 0, firstName = '', lastName = '', roleId = 0, managerId = 0) {
        this.connection = connection;
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.roleId = roleId;
        this.managerId = managerId;
    }

    setProperties(data) {
        Object.getOwnPropertyNames(this).forEach((property) => {
            if (property !== 'connection') {
                this[property] = data[property];
            }
        });
    }

    // displays table of all employees
    listAllEmployees() {
        this.connection.query(
            'SELECT employee.id, employee.first_name, employee.last_name, role.title AS role , department.name AS department, role.salary, CONCAT(manager.first_name, " ", manager.last_name) AS manager ' +
            'FROM employee ' +
            'LEFT JOIN role ON employee.role_id = role.id ' +
            'LEFT JOIN department ON role.department_id = department.id ' +
            'LEFT JOIN employee manager ON manager.id = employee.manager_id',

            function (err, res) {
                if (err) {
                    console.log(err);
                }
                console.log('\n');
                console.table(res);
            }
        );
    }

    // adds a new employee
    addEmployee(firstName = this.first_name, lastName = this.last_name, roleId = this.role_id, managerId = this.manager_id) {
        this.connection.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [{ first_name: firstName}, {last_name: lastName}, {role_id: roleId}, {manager_id: managerId}],
            function (err, res) {
                if (err) {
                    console.log(err);
                }
            }
        );
    }

    // updates an exsisting employee
    updateEmployee(id = this.id, firstName = this.first_name, lastName = this.last_name, roleId = this.role_id, managerId = this.manager_id) {
        this.connection.query("UPDATE employee SET ? WHERE ?", [{ first_name: firstName, last_name: lastName, role_id: roleId, manager_id: managerId }, { id: id }],
            function (err, res) {
                if (err) console.log(err);
            }
        );
    }
}



module.exports = Employee;