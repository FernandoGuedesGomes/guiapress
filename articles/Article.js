const Sequelize = require("sequelize");
const connection = require("../database/database");
const Category = require("../categories/Category");

const Article = connection.define('articles', {
    title: {
        type: Sequelize.STRING,
        allowNul: false
    },slug: {
        type: Sequelize.STRING ,
        allowNull: false
    },
    body: {
        type: Sequelize.TEXT,
        allowNul: false
    }
})


Article.belongsTo(Category);
Category.hasMany(Article);



module.exports = Article;