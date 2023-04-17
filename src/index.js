const app = require("./app");
const PORT = 3001;
const { sequelize } = require("./database/db");


async function server() {
  try {
    await sequelize.sync({ force: true }).then(() => {
      console.log(`Se conecto la base de datos`);
      app.listen(PORT, () => {
        console.log(`Servidor Listo en el puerto ${PORT}`);
      });
    });
  } catch (error) {
    console.log(error);
  }
}

server();
