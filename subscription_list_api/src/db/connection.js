const Sequelize = require('sequelize');

// initialize db connection
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'postgres',

    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },


});


sequelize
    .authenticate()
    .then(function(err) {
        console.log('Connection has been established successfully.');
    })
    .catch(function (err) {
        console.log('Unable to connect to the database:', err);
    });

module.exports = {
    sequelize
}