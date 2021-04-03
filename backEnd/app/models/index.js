const dbConfig = require("../database-mysql/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.students = require("./student.model.js")(sequelize, Sequelize);
db.states = require("./state.model.js")(sequelize, Sequelize);

db.states.hasMany(db.students, { as: "students" });
db.students.belongsTo(db.states, {
  foreignKey: "stateId",
  as: "state",
});

module.exports = db;
