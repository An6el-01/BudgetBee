import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";

export class AIRecommendations extends Model {}

AIRecommendations.init(
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
            references:{
                model: "Users",
                key: 'id',
            },
            onUpdate: "CASCADE",
            onDelete: "CASCADE",
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        recommendation: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        created_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
    },
    {
        sequelize,
        modelName: "AIRecommendations",
        tableName: "AIRecommendations"
    }
);