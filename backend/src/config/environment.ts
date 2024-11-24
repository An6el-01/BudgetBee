//ENVIRONMENT VARIABLES

import dotenv from 'dotenv';

dotenv.config();

export const config = {
    database: {
        name: process.env.DATABASE_NAME!,
        user: process.env.DATABASE_USER!,
        password: process.env.DATABASE_PASSWORD!,
        host: process.env.DATABASE_HOST!,
    },
    port: process.env.PORT || 5000,
};