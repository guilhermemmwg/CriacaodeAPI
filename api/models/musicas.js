'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Musicas extends Model {
    static associate(models) {
      this.belongsTo(models.Artista, {
        as: 'artista',
        foreignKey: 'artistaId'
      })
    }
  }
  Musicas.init({
    nome_musica: DataTypes.STRING,
    artistaId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Musicas',
    tableName: 'musicas'
  });
  return Musicas;
};