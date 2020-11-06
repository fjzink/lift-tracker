import express from 'express';
import cors from 'cors';
import { trainingSplitRouter } from './controllers/trainingSplitController';

const app = express();
const port = 3000;
app.use(cors());

app.use('/splits', trainingSplitRouter);

app.get('/', async (req, res) => {
    res.send('The app is working :)');
});

app.listen(port, () => {
    return console.log(`The server is listening on port ${port}`);
});
