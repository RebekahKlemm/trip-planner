var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/tripplanner', {logging: false});

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

var pageConfig = {};

//Create your table in your database
var Place = db.define('place', placeSchema, placeConfig);

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




//Synch your database
db.sync({force: true});  //returns a promise so you can .then off it

//Create instances using .create, .build /.save, .bulkCreate, etc (optional)
// .then(function(){
//     Page.create({
//         Title: blah}


//Define relationships
//     Page.belongsTo(User, {as: 'author'});

//Module.exports
    module.exports = {
        Place: Place,
        Hotel: Hotel,
        Activity: Activity,
        Restaurant: Restaurant
    }
