import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";

export class FinancialForecasts extends Model {}

FinancialForecasts.init(
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull:false,
            autoIncrement: true,
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
        forecast_type: {
            type: DataTypes.ENUM('income', 'expense'),
            allowNull: false,
        },
        forecast_value: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        forecast_description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
    },
    {
        sequelize,
        modelName: "FinancialForecasts",
        tableName: "FinancialForecasts",
    }
);