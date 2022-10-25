"use strict";
// const {
//   Model
// } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Pantry = sequelize.define("Pantry", {
    name: DataTypes.STRING,
    ownerId: DataTypes.INTEGER,
  });
  Pantry.associate = function (models) {
    Pantry.belongsTo(models.User, { foreignKey: "ownerId" });
    Pantry.hasMany(models.Items, {
      foreignKey: "pantryId",
      onDelete: "CASCADE",
      hooks: "TRUE",
    });
  };
  return Pantry;
};
