const express = require('express');
const port = process.env.PORT || 8080;
const fs = require('fs');

const app = express();

app.get('/', (req, res) => {
    fs.readFile('./paketo-logo-full-color.png', (err, data) => {
      res.type('png');
      res.send(data);
    });
});

app.listen(port);
