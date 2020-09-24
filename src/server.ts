import express from 'express';
import { client } from './config/mongoconfig';
const app = express();
const port = 3000;

app.get('/', async (req, res) => {
    res.send('The app is working :)');
});

app.listen(port, () => {
    return console.log(`The server is listening on port ${port}`);
});
