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

        sequelize.query(`
        SELECT * from food_items
        WHERE restaurant_id = ${id}
        `).then(dbres => res.status(200).send(dbres[0]))
    },
}