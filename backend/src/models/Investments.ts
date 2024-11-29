import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";

export class Investments extends Model {}

Investments.init(
    {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        user_id:{
            type: DataTypes.INTEGER,
            allowNull:false,
            references: {
                model: "Users",
                key: "id"
            },
            onUpdate: "CASCADE",
            onDelete: "CASCADE",
        },
        investment_type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        amount_invested: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        current_value: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
    },
    {
        sequelize,
        modelName: "Investments",
        tableName: "Invesments",
    }
);