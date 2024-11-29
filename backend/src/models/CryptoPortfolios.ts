import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";

export class CryptoPortfolio extends Model {}

CryptoPortfolio.init(
    {
        id:{
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
        crypto_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        amount_held: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        current_value: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        last_updated: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        purchase_price: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: "CryptoPortfolios",
        tableName: "CryptoPortfolios",
    }
);