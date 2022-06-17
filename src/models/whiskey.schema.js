'use strict';

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('whiskey', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    proof: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
};