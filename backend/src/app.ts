import express from 'express';
import bodyParser from 'body-parser';
import cors from "cors";
import apiRoutes from './api';

const app = express();

//Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/api', apiRoutes);

export default app;