import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import { trainingSplitRouter } from './controllers/trainingSplitController';
import { authRouter } from './controllers/authController';

import './auth/auth';

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());

app.use('/api/splits', trainingSplitRouter);
app.use('/api/auth', authRouter);

app.get('/', async (req, res) => {
    res.send('The app is working :)');
});

app.listen(port, () => {
    return console.log(`The server is listening on port ${port}`);
});
