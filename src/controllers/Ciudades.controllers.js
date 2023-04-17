const { ciudades } = require("../database/db");

//Buscar ciudades
const getCiudad = async (req, res) => {
  try {
    const allCiudades = await ciudades.findAll();
    res.status(200).json(allCiudades);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

const createCiudad = async (req, res) => {
  try {
    const { name } = req.body;
    const createCiudad = await ciudades.create({
      name,
    });

    res.status(200).json(createCiudad);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

const deleteCiudad = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteCiudad = await ciudades.findByPk(id);
    deleteCiudad.destroy();
    res.status(200).send("Se elimino el resgistro de la base de datos");
  } catch (error) {
    res.status(404).send(error.message);
  }
};

module.exports = {
  getCiudad,
  createCiudad,
  deleteCiudad
};
