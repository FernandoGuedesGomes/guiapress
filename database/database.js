const sequelize = require("sequelize");

const connection = new sequelize('guiapress', 'root', '12345', {
    hots: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;