const {Sequelize} = require("sequelize")

// Borrar contraseña de postgress y cambiar por "null"
const db = new Sequelize("mercadopago", "postgres", "1234", {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

module.exports = db;