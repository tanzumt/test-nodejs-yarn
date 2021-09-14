const express = require('express');
const port = process.env.PORT || 8080;
const fs = require('fs');

const app = express();

app.get('/', (req, res) => {
    fs.readFile('./adelaide.jpg', (err, data) => {
      res.type('png');
      res.send(data);
    });
});

app.listen(port);
