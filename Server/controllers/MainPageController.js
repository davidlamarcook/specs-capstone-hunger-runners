const axios = require('axios')

module.exports = {
    getRestaurants: (req,res) => {
        const { sequelize } = req.app.get("db");
        sequelize.query(`
        SELECT * from restaurants
        `).then(dbres => res.status(200).send(dbres[0]))
    },

    getMenuPage: (req,res) => {
        const {sequelize} = req.app.get("db");
        const {id} = req.params;

        // sequelize.query(`
        // SELECT * from food_items
        // WHERE restaurant_id = ${id}
        // `).then(dbres => res.status(200).send(dbres[0]))

        sequelize.query(`
        SELECT food_items.food_item_name, food_items.food_item_picture, food_items.food_item_price, food_items.food_item_id, restaurants.restaurant_name, restaurants.restaurant_img, restaurants.restaurant_delivery_fee
        FROM food_items
        INNER JOIN restaurants ON food_items.restaurant_id=restaurants.restaurant_id
        WHERE food_items.restaurant_id = ${id};
        `).then(dbres => res.status(200).send(dbres[0]))
    },
}