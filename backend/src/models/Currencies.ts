import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";

export class Currencies extends Model {};

Currencies.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        base_currency: {
            type: DataTypes.STRING,
            allowNull: false
        },
        conversion_rate:{
            type: DataTypes.JSON,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'Currencies',
        tableName: "Currencies"
    }
);
