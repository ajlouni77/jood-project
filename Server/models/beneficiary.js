"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Beneficiary extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: "userId" });
      this.belongsToMany(models.Program, {
        through: "BeneficiaryPrograms",
        foreignKey: "beneficiaryId",
      });
    }
  }
  Beneficiary.init(
    {
      userId: DataTypes.INTEGER,
      statusPerson: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "",
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "",
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "",
      },
      needs: {
        type: DataTypes.JSON,
        allowNull: false,
        defaultValue: {
          food: false,
          books: false,
          clothes: false,
        },
      },
      document: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "قيد الانتظار",
      },
      needsDescription: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: "",
      },
      approvedByAdmin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: "Beneficiary",
    }
  );
  return Beneficiary;
};
