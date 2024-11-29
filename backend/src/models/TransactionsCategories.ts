import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";

export class TransactionsCategories extends Model {}

TransactionsCategories.init(
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        type: {
            type: DataTypes.ENUM('income', 'expense'),
            allowNull: false,
        },
        category: {
            type: DataTypes.ENUM('want', 'need', 'savings'),
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: "TransactionsCategories",
        tableName: "TransactionsCategories",
    }
);