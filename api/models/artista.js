'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Artista extends Model {
    static associate(models) {
      this.hasMany(models.Musicas, {
        as: 'musicas',
        foreignKey: 'artistaId'
      })
    }
  }
  Artista.init({
    nome_artista: DataTypes.STRING,
    nascimento: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Artista',
    tableName: 'artista'
  });
  return Artista;
};