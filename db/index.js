const connection = require('./connection')

class Data {
    constructor(connection){
        this.connection = connection
    }
    findAllRoles(){
        return this.connection.promise().query(
            `SELECT empRole.id, empRole.title, department.name AS department, empRole.salary
            FROM empRole LEFT JOIN department
            ON empRole.department_id = department.id;`
        )
    }
}

module.exports = new Data(connection)