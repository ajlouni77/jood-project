"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    static associate(models) {
      // إذا كان هناك علاقات مع جداول أخرى، يتم تعريفها هنا
    }
  }

  Project.init(
    {
      image: { type: DataTypes.STRING, allowNull: false },
      title: { type: DataTypes.STRING, allowNull: false },
      description: { type: DataTypes.TEXT, allowNull: false },
      goal: { type: DataTypes.INTEGER, allowNull: false },
      raised: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
    },
    {
      sequelize,
      modelName: "Project",
    }
  );

  return Project;
};
