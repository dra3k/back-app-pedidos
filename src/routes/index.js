const clienteController = require("./../controllers/clienteController");
const productoController = require("./../controllers/productoController");
/**
 *necesita enviar apli de express
 * @param apli->express
 */
module.exports.rutas = (apli) => {
  //rutas de login
  //rutas de usuario
  //rutas de clientes
  app.get("/cliente", clienteController.listar);
  app.get("/cliente/:id", clienteController.mostrar);
  app.post("/cliente", clienteController.guardar);
  app.put("/cliente/:id", clienteController.modificar);
  app.delete("/cliente/:id", clienteController.eliminar);
  //rutas de producto
  app.get("/producto", productoController.listar);
  app.get("/producto/:id", productoController.mostrar);
  app.post("/producto", productoController.guardar);
  app.put("/producto/:id", productoController.modificar);
  app.delete("/producto/:id", productoController.eliminar);
  //rutas de pedidos
};
