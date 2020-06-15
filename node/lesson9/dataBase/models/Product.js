module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false
            },
            price: {
                type: DataTypes.DECIMAL,
                allowNull: false
            },
            discount: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            userId: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        },
        {
            tableName: 'product',
            timestamps: false
        })

    const User = sequelize.import('./User.js');

    Product.belongsTo(User, {foreignKey: 'userId'})


    return Product;
};
