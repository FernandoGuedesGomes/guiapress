const sequelize = require("sequelize");

const connection = new sequelize('guiapress', 'root', '123456', {
    hots: 'localhost',
    dialect: 'mysql',
    timezone: "-03:00"
});

module.exports = connection;