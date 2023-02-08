module.exports = {
    DB_HOST: 'elastikteams.database.windows.net',
    DB_USER: 'ElastikTeamsAdmin',
    DB_PASS: 'Sql@2021',
    DB_NAME: 'Elevate2023BookClub',
    dialect: 'mssql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}

