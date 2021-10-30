
module.exports = (sequelize,DataTypes) => {
  const Posts = sequelize.define("Users", {
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
    }});
    
    (async () => {
      await sequelize.sync({ force: true });
      // Code here
    })();
  return Posts;
};