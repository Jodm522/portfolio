"use strict";

// const { DataTypes } = require("sequelize/types");
const { sequelize } = require("../models");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Items", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      ownerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Users" },
      },
      pantryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Pantries" },
      },
      name: {
        allownull: false,
        type: Sequelize.STRING,
      },
      isTracked: {
        type: Sequelize.BOOLEAN,
      },
      category: {
        type: sequelize.STRING,
      },
      amountWholeNum: {
        type: Sequelize.INTEGER,
      },
      currGrams: {
        type: Sequelize.DECIMAL,
      },
      currTbsp: {
        type: Sequelize.DECIMAL,
      },
      minAmount: {
        type: Sequelize.DECIMAL,
      },
      gToTbspConv: {
        type: Sequelize.DECIMAL,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Items");
  },
};
