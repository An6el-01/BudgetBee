//DATABASE SETUP

import { Sequelize } from "sequelize";
import { User } from "../models/User";

export const sequelize = new Sequelize(
    process.env.DATABASE_NAME || 'BudgetApp_Database',
    process.env.DATABASE_USERNAME || 'postgres',
    process.env.DATABASE_PASSWORD || '',
    {
        host: process.env.DATABASE_HOST || 'localhost',
        dialect: 'postgres',
    }
);

export const connectDB = async () => {
    try{
        await sequelize.authenticate();
        await sequelize.sync();
        console.log('Database connection established successfully[database.ts].')
    }catch(error){
        console.error('Unable to connect to database[database.ts]. error');
        process.exit(1);
    }
};