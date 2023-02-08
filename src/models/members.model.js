module.exports = (sequelize, Sequelize) => {
    const Members = sequelize.define(
        "members", 
        {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            firstName: Sequelize.STRING,
            lastName: Sequelize.STRING, 
            email: Sequelize.STRING,
            createdAt:  Sequelize.DATE,
            imageURL: Sequelize.STRING,
            titlesRead: Sequelize.INTEGER
        },
        {
            updatedAt: false,
        }
    );
    return Members;
}