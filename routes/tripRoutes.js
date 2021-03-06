const express = require('express');
const router = express.Router();
const Promise = require('bluebird')

var models = require('../models')
var modelPlace = require('../models/place');
var modelHotel = require('../models/hotel');
var modelRestaurant = require('../models/restaurant');
var modelActivity = require('../models/activity');

var Hotel = modelHotel;
var Restaurant = modelRestaurant;
var Activity = modelActivity;
var Place = modelPlace;


router.get('/', function(req, res, next){
	var Hp = Hotel.findAll();
	var Rp = Restaurant.findAll();
	var Ap =Activity.findAll();
	Promise.all([Hp, Rp, Ap])
		.spread(function(hotels, restaurants, activities){

		//Hotel.findAll()
		//.then(function(hotels){
			res.render('../views/index.html', {hotels:hotels, restaurants:restaurants, activities:activities});
	})
		// res.render('../views/index.html');
		// })
		// .catch(function(err){
		// 	throw new Error('tripRoutes.js');
		// })
})

module.exports = router;