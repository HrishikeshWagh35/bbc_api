const dbConfig = require("../../config/db.config.js");
const Sequelize = require("sequelize");

console.log(dbConfig.DB_NAME, dbConfig.DB_USER, dbConfig.DB_PASS, dbConfig.DB_HOST, dbConfig.dialect, dbConfig.pool.max, dbConfig.pool.min, dbConfig.pool.acquire, dbConfig.pool.idle)

const sequelize = new Sequelize(dbConfig.DB_NAME, dbConfig.DB_USER, dbConfig.DB_PASS, {
    host: dbConfig.DB_HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: 0,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.clubs = require("./clubs.model.js")(sequelize, Sequelize);

module.exports = db;