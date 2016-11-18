const express = require('express');
const router = express.Router();

var models = require('../models')

var Hotel = models.Hotel;
var Restaurant = models.Restaurant;
var Activity = models.Activity;
var Place = models.Place;


router.get('/' function(req, res, next){
	var Hp = Hotel.findAll({})
	var Rp = Restaurant.findAll({})
	var Ap =Activity.findAll({})
	Promise.all([Hp, Rp, Ap])
	.then(function(){
		res.render()
	})
})