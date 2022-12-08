module.exports = (sequelize, DataTypes) => {
    const NewStock = sequelize.define('NewStock', {
        StckSymbol: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        }
    });

    return NewStock;
};