class Department {

    constructor(connection, id = 0, name = '') {
        this.connection = connection;
        this.id = id;
        this.name = name;
    }

    
    setProperties(data) {
        Object.getOwnPropertyNames(this).forEach((property) => {
            if (property !== 'connection') {
                this[property] = data[property];
            }
        });
    }

    // displays All Departments
    listAllDepartments() {
        this.connection.query(
            'SELECT department.id, department.name ' +
            'FROM department ',
            function (err, res) {
                if (err) {
                    console.log(err);
                }
                console.log('/n');
                console.table(res);
            } 
        );
    }

    // adds a new department
    addDepartment(departmentName = this.name) {
        this.connection.query('INSERT INTO department (name) VALUES (?)', [departmentName],
            function (err, res) {
                if (err) {
                    console.log(err);
                }
            }
        );
    }
}

module.exports = Department;