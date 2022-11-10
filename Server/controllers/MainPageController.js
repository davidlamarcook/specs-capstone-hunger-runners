const axios = require('axios')

module.exports = {
    getRestaurants: (req,res) => {
        const { sequelize } = req.app.get("db");
        sequelize.query(`
        SELECT * from restaurants
        `).then(dbres => res.status(200).send(dbres[0]))
    },
}