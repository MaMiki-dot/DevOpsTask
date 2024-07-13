const express = require('express');
const os = require('os');

const app = express();
const port = 8000;

app.get('/', (req, res) => {
    res.send('Welcome to the Node.js API!');
});

app.get('/hostname', (req, res) => {
    res.send(os.hostname());
});

app.get('/author', (req, res) => {
    res.send(process.env.AUTHOR || 'Unknown');
});

app.get('/id', (req, res) => {
    res.send(process.env.UUID || 'No UUID set');
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
