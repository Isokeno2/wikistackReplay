const Sequelize = require("sequelize");

// telling dtabase that we want to work with this pg url
//
const db = new Sequelize("postgres://localhost:5432/wikistack")

module.exports = { db }
