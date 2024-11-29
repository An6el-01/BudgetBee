//DATABASE SETUP

import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

export const sequelize = new Sequelize(
    process.env.DB_NAME as string,
    process.env.DB_USER as string,
    process.env.DB_PASSWORD as string,
    {
        host: process.env.DATABASE_HOST || 'localhost',
        port: parseInt(process.env.PORT || "5432", 10),
        dialect: "postgres",
        logging: process.env.NODE_ENV === "development" ? console.log : false, //Enable logging only in development
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000,
        },
        define: {
            timestamps: true,
        },
    }
);
//Connect to PostgresSQL Database
export const connectDB = async (): Promise<void> => {
    try{
        await sequelize.authenticate();
        await sequelize.sync({ alter: process.env.NODE_ENV === 'development' });
        console.log('✅ Database connection established successfully.');
    }catch(error) {
        const err = error as Error
        console.error('❌ Unable to connect to the database: ', err.message);
        process.exit(1);
    }
};

