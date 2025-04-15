const Sequelize = require('sequelize');

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.db = new Sequelize(
            'mvc_avaliativo',
            'postgres-mvc',
            'postgres',
            { 
                host: 'localhost', 
                dialect: 'mysql'
            }
        );
    }
}

module.exports = new Database();
