module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
        // ,
        // create_at: {
        //     type: DataTypes.DATE,
        //     defaultValue: sequelize.fn('now')
        // }
    },
        {
            tableName: 'users',
            timestamps: false
        })


    return User;
};
