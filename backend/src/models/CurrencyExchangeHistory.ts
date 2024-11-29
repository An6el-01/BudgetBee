import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";

export class CurrencyExchangeHistory extends Model {}

CurrencyExchangeHistory.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
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
        currency_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "Currencies",
                key: "id",
            },
            onUpdate: "CASCADE",
            onDelete: "CASCADE",
        },
        conversion_rate: {
            type: DataTypes.JSON,
            allowNull: false,
        },
        date:{
            type: DataTypes.DATE,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: "CurrencyExchangeHistory",
        tableName: "CurrencyExchangeHistory",
    }
)