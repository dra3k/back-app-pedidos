// imports
const express = require("express");
const morgan = require("morgan");
//configuraciones
//importando el modulo rutas
const routes = require("./routes/index.js");

//configs
const apli = express();
apli.use(morgan("dev"));

//habilitar rutas
routes.rutas(apli);

//levantar servidor
apli.listen(3000, () => {
  console.log("servidor levantado en: ");
});
