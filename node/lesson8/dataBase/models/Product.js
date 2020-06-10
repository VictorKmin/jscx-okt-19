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
            }
        },
        {
            tableName: 'product',
            timestamps: false
        })


    return Product;
};
