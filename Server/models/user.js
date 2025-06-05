"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      this.hasOne(models.Donor, { foreignKey: "userId" });
      this.hasOne(models.Beneficiary, { foreignKey: "userId" });
      this.hasMany(models.SocialLogin, { foreignKey: "userId" });
      this.hasMany(models.Donation, { foreignKey: "donorId" });
      this.hasMany(models.Notification, { foreignKey: "userId" });
    }
  }
  User.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      role: {
        type: DataTypes.STRING,
        defaultValue: "donor",
      },
      status: {
        type: DataTypes.STRING,
        defaultValue: "pending",
      },
      phoneNumber: DataTypes.STRING,
      address: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
