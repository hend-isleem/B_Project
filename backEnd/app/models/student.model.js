module.exports = (sequelize, Sequelize) => {
  const Student = sequelize.define("student", {
    // id: {
    //   type: Sequelize.INTEGER,
    //   autoIncrement: true,
    //   primaryKey: true,
    // },
    id: {
      type: Sequelize.STRING,
      // autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    isDeleted: {
      type: Sequelize.BOOLEAN,
    },
    phone: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });
  return Student;
};
