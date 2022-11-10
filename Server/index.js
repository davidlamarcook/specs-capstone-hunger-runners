//IMPORTS
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { Sequelize } = require("sequelize")
const mainpagectrl = require('./controllers/MainPageController')

const app = express();

const {SERVER_PORT, CONNECTION_STRING} = process.env;

//MIDDLEWARE 
app.use(express.json());
app.use(cors());

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: "postgres",
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false,
        }
    }
});

sequelize.authenticate().then(() => {
    app.set("db", {
        sequelize,
    });

    //ENDPOINTS
    app.get('/getRestaurants', mainpagectrl.getRestaurants)

    //APP LISTEN
    app.listen(SERVER_PORT, () => {
        console.log(`Server running live from port ${SERVER_PORT} it's Saturday Night Live`)
    });
});

