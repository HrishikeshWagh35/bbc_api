module.exports = (sequelize, Sequelize) => {
    const MemberClub =  sequelize.define(
        "member_club", 
        {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            personId: Sequelize.INTEGER,
            companyId: Sequelize.INTEGER,
            createdAt: Sequelize.DATE,
        },
        {
            updatedAt: false,
        }
    );
    return MemberClub;
}