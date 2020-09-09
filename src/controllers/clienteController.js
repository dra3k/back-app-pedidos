const listar = function (req, res) {
  res.json({ mensaje: "lista cliente" });
};
const mostrar = function (req, res) {
  res.json({ mensaje: "mostrar cliente" });
};
const guardar = function (req, res) {
  res.json({ mensaje: "guardar cliente" });
};
const modificar = function (req, res) {
  res.json({ mensaje: "modificar cliente" });
};
const eliminar = function (req, res) {
  res.json({ mensaje: "eliminar cliente" });
};

module.exports = {
  listar,
  mostrar,
  guardar,
  modificar,
  eliminar,
};
