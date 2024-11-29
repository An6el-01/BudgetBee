import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";

export class Notifications extends Model {}

Notifications.init(
    {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "Users",
                key: "id",
            },
            onUpdate: "CASCADE",
            onDelete: "CASCADE",
        },
        message:{
            type: DataTypes.STRING,
            allowNull: false
        },
        created_at:{
            type: DataTypes.DATE,
            allowNull: false,
        },
        read: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        notification_description:{
            type: DataTypes.STRING,
        },
    },
    {
        sequelize,
        modelName: "Notifications",
        tableName: "Notifications",
    }
);