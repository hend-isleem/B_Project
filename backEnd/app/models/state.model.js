module.exports = (sequelize, Sequelize) => {
  const State = sequelize.define("state", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });
  return State;
};
