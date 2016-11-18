var Sequelize = require('sequelize');

var db = require('./_db');

///////////////HOTEL/////////////////
var hotelSchema = {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    num_stars: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    amenities: {
        type: Sequelize.STRING,
        allowNull: false
    }
};

var hotelConfig = {};

//Create your table in your database
var Hotel = db.define('hotel', hotelSchema, hotelConfig);


module.exports = Hotel;

