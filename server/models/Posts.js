const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define("users", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    budget: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    sex: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return users;
};

