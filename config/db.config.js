const path = require('path')

require('dotenv-safe').config({
    path: path.join(__dirname, '../.env'),
    example: path.join(__dirname, '../.env.example'),
})

module.exports = {
    DB_HOST: process.env.DB_HOST,
    DB_USER: process.env.DB_USER,
    DB_PASS: process.env.DB_PASS,
    DB_NAME: process.env.DB_NAME,
    dialect: 'mssql',
    pool: {
        max: parseInt(process.env.pool_max),
        min: parseInt(process.env.pool_min),
        acquire: parseInt(process.env.pool_acquire),
        idle: parseInt(process.env.pool_idle)
    }
}