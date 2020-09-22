import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('The app is working :)');
});

app.listen(port, () => {
    return console.log(`The server is listening on port ${port}`);
});
