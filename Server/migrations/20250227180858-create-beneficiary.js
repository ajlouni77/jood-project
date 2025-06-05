"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Beneficiaries", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
      },
      statusPerson: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "",
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "",
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "",
      },
      needs: {
        type: Sequelize.JSON,
        allowNull: false,
        defaultValue: {
          food: false,
          books: false,
          clothes: false,
        },
      },
      document: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "قيد الانتظار",
      },
      needsDescription: {
        type: Sequelize.TEXT,
        allowNull: false,
        defaultValue: "",
      },
      approvedByAdmin: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
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
    await queryInterface.dropTable("Beneficiaries");
  },
};
