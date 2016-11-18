var Place = require('./place');
var Hotel = require('./hotel');
var Sequelize = require('sequelize');
var Restaurant = require('./restaurant');
var db = require('./_db');
var Activity = require('./activity');

    
// Synch your database
// db.sync({force: true})
// .then(function(){

Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);
Activity.belongsTo(Place);

module.exports = db;