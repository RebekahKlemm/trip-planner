var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/tripplanner', {logging: false});

///////////////RESTAURANT/////////////////
var restaurantSchema = {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cuisine: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
};

var restaurantConfig = {};

//Create your table in your database
var Restaurant = db.define('restaurant', restaurantSchema, restaurantConfig);

 module.exports = Restaurant;