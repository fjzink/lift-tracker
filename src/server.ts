import express from 'express';
import { client } from './config/mongoconfig';
import { trainingSplitRouter } from './controllers/trainingSplitController';

const app = express();
const port = 3000;

app.use('/splits', trainingSplitRouter);

app.get('/', async (req, res) => {
    res.send('The app is working :)');
});

app.listen(port, () => {
    return console.log(`The server is listening on port ${port}`);
});
