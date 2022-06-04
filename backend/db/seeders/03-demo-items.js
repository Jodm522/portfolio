"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Items", [
      {
        ownerId: 1,
        pantryId: 1,
        name: "AP flour",
        isTracked: true,
        amountWholeNum: null,
        currGrams: 1000,
        currTbsp: 128,
        minAmount: 60,
        gToTbspConv: 0.128,
        category: flour,
      },
    ]);
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
