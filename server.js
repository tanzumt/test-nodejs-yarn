const express = require('express');
const port = process.env.PORT || 8080;

const app = express();

app.use(express.static("workspace"));

app.get('/', (request, response) => {
  response.send(`<!DOCTYPE html>
<html>
  <head>
    <title>Powered By Paketo Buildpacks</title>
  </head>
  <body>
    <img src="./paketo-logo-full-color.png"></img>
  </body>
</html>`);
});

app.listen(port);
