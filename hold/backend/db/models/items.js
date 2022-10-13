"use strict";

module.exports = (sequelize, DataTypes) => {
  const Items = sequelize.define("Items", {
    ownerId: DataTypes.NUMBER,
    pantryId: DataTypes.NUMBER,
    name: DataTypes.STRING,
    isTracked: DataTypes.BOOLEAN,
    amountWholeNum: DataTypes.NUMBER,
    currGrams: DataTypes.DECIMAL,
    currTbsp: DataTypes.DECIMAL,
    minAmount: DataTypes.DECIMAL,
    gToTbspConv: DataTypes.DECIMAL,
    category: DataTypes.STRING,
    trackedBy: DataTypes.STRING,
  });

  Items.associate = function (models) {
    Items.belongsTo(models.User, { foreignKey: "ownerId" });
    Items.belongsTo(models.Pantry, { foreignKey: "pantryId" });
  };
  return Items;
};
