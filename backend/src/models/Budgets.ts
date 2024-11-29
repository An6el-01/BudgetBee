import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';

export class Budgets extends Model {}

Budgets.init(
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        user_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "Users",
                key: "id",
            },
            onUpdate: "CASCADE",
            onDelete: "CASCADE",
        },
        category_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "TransactionsCategories",
                key: "id",
            },
            onUpdate: "CASCADE",
            onDelete: "CASCADE",
        },
        amount:{
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        spent: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        type:{
            type: DataTypes.ENUM('expense','income'),
            allowNull: false,
        },
        created_at:{
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
        updated_at:{
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
        favorite:{
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
    },
    {
        sequelize,
        modelName: "Budgets",
        tableName: "Budgets",
    }
);