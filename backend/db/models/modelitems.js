"use strict";

module.exports = (sequelize, DataTypes) => {
  const ModelItems = sequelize.define("ModelItems", {
    name: DataTypes.STRING,
    gToTbspConv: DataTypes.DECIMAL,
    category: DataTypes.STRING,
  });
  return ModelItems;
};
