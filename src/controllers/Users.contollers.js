const { users } = require("../database/db");

//Buscar todos los usuarios GET
const getUsers = async (req, res) => {
  try {
    const { username } = req.query;
    if (!username) {
      const serarchUsers = await users.findAll({
        attributes: ['username']
      });
      res.status(200).json(serarchUsers);
    } else {
      const searchUserName = await users.findAll({
        where: {
          username,
        },
      });
      res.status(200).json(searchUserName);
    }
  } catch (error) {
    res.status(404).send(error.message);
  }
};

//Buscar usuarios por ID GET
const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const findById = await users.findByPk(id);
    if (!findById) throw new Error(`El usuario no existe en la base de datos`);
    res.status(200).json(findById);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

//Crear un usuario POST
const createUsers = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const newUser = await users.create({
      username,
      email,
      password,
    });

    res.status(200).json(newUser);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

//Borrar un usuario DELETE

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteUser = await users.findByPk(id);

    //funcion que elimina el resgistro de la DB
    deleteUser.destroy();

    res.status(200).send(`Eliminado exitosamente`);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

module.exports = {
  getUsers,
  createUsers,
  getUser,
  deleteUser,
};
