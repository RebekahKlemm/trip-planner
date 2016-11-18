var Sequelize = require('sequelize');
var db = require('./_db');


///////////////PLACE/////////////////
var placeSchema = {
    address: {
        type: Sequelize.STRING,
        allowNull: false
    },
    city: {
        type: Sequelize.STRING,
        allowNull: false
    },
    state: {
        type: Sequelize.STRING,
        allowNull: false
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    location: {
        type: Sequelize.ARRAY(Sequelize.FLOAT),
        allowNull:false
    }
};

var placeConfig = {};

//Create your table in your database
var Place = db.define('place', placeSchema, placeConfig);

module.exports = Place;
