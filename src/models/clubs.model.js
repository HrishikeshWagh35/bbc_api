const moment = require('moment');

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
        createdAt: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW,
            get() {
                return moment(this.getDataValue('createdAt')).format('DD-MM-YYYY');
            }
        },
        photo: {
            type: Sequelize.STRING
        }
    }, { updatedAt: false });
    return Clubs;
}