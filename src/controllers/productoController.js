const listar = function (req, res) {
  res.json({ mensaje: "lista producto" });
};
const mostrar = function (req, res) {
  res.json({ mensaje: "mostrar producto" });
};
const guardar = function (req, res) {
  res.json({ mensaje: "guardar producto" });
};
const modificar = function (req, res) {
  res.json({ mensaje: "modificar producto" });
};
const eliminar = function (req, res) {
  res.json({ mensaje: "eliminar producto" });
};

module.exports = {
  listar,
  mostrar,
  guardar,
  modificar,
  eliminar,
};
