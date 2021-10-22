"use strict";

const food = (sequelize, DataTypes) =>
  sequelize.define("Food", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    calories: {
      type: DataTypes.NUMBER,
      allowNull: true,
    },
  });

module.exports = food;