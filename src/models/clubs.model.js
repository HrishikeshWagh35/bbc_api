module.exports = (sequelize, Sequelize) => {
    const Clubs = sequelize.define("clubs", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING
        },
        createdAt: Sequelize.DATE,
        photo: {
            type: Sequelize.STRING
        }
    }, { updatedAt: false });
    return Clubs;
}