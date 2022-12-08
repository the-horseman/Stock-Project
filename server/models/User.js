module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        FName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        LName: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });

    User.associate = (models) => {
        User.hasMany(models.Stock, {
            onDelete: 'cascade',
        });
    };

    return User;
}