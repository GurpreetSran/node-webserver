const port = process.env.port || 3000;
const express = require('express');
const fs = require('fs');
let app = express();

app.use((req, res, next) => {
    let now = new Date().toString();
    fs.appendFile('server.log', `${now} : ${req.method}, ${req.url} \n`, (err) => {
        console.log('Unable to append to server log');
    });
    next();
});

app.get('/', (req, res) => {
    res.send({name: 'test'});
});

app.get('/about', (req, res) => {
    res.send('About page');
});

app.listen(port, () => {
    console.log('Server running on 3000')
});