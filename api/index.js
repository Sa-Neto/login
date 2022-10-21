import dotenv from 'dotenv';

dotenv.config();

import express from 'express';
import cors from 'cors';
import routes from './routes/routes';
import './database/config'

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use('/',routes)

export default app;
