var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/tripplanner', {logging: false});

///////////////ACTIVITY/////////////////
var activitySchema = {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    age_range: {
        type: Sequelize.STRING,
        allowNull: false
    }
};

var activityConfig = {};

//Create your table in your database
var Activity = db.define('activity', activitySchema, activityConfig);


module.exports = Activity;