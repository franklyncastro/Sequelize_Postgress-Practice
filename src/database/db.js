const { Sequelize } = require("sequelize");
const userModel = require('../models/User.models')
const ciudadesModels = require('../models/Ciudades.models')

const sequelize = new Sequelize(
  `postgres://postgres:developer@localhost:5432/clientes`,
  { logging: false }
);


userModel(sequelize)
ciudadesModels(sequelize)

module.exports = { sequelize, ...sequelize.models };

console.log(sequelize.models)