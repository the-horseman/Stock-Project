module.exports = (sequelize, DataTypes) => {
    const Stock = sequelize.define('Stock', {
        symbol: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        }, 
        modelLink: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        Open: {
            type: DataTypes.FLOAT,
            allowNull: true,
        },
        Close: {
            type: DataTypes.FLOAT,
            allowNull: true,
        },
        High: {
            type: DataTypes.FLOAT,
            allowNull: true,
        },
        Low: {
            type: DataTypes.FLOAT,
            allowNull: true,
        }
    });

    return Stock;
}