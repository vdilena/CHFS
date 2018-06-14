'use strict';
module.exports = (sequelize, DataTypes) => {
  var Categoria = sequelize.define('Categoria', {
    nombre: DataTypes.STRING
  }, {tableName: 'categoria'});
  Categoria.associate = function(models) {
    Categoria.hasMany(models.Producto, {as: 'Producto', foreignKey: 'categoriaId'})
  };
  return Categoria;
};