class Role {

    constructor(connection, id = 0, title = '', salary = 0.00, departmentId = 0) {
        this.connection = connection;
        this.id = id;
        this.title = title;
        this.salary = salary;
        this.departmentId = departmentId;
    }

    setProperties(data) {
        Object.getOwnPropertyNames(this).forEach((property) => {
            if (property !== 'connection') {
                this[property] = data[property];
            }
        });
    }

    //displays all Roles
    listAllRoles() {
        this.connection.query(
            'SELECT role.id, role.title, department.name, role.salary ' +
            'FROM role ' +
            'LEFT JOIN department ON role.department_id = department.id ',
            function (err, res) {
                if (err) {
                    console.log(err);
                }
                console.log('\n');
                console.table(res);
            }
        );
    }

    // adds a new role
    addRole(title = this.title, salary = this.salary, departmentId = this.department_id) {
        this.connection.query('INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)', [title, salary, departmentId], 
            function (err, res) {
                if (err) {
                    console.log(err);
                }
            }
        );
    }
}

module.exports = Role;