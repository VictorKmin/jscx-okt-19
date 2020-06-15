module.exports = (sequelize, DataTypes) => {
    const Roles = sequelize.define('Roles', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true
            },
            title: {
                type: DataTypes.STRING,
                allowNull: true
            },
        },
        {
            tableName: 'roles',
            timestamps: false
        });

    return Roles;
};
