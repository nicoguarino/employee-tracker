const db = require('./connection');

// create a constructor  that executes needed methods

//create a class called DB
    // in class create constructor function that takes in db connector
    // creating methods taking in the prompts

class DB {
    constructor(connection) {
        this.connection = connection;
    }
}