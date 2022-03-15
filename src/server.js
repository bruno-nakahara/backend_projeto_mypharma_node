const express = require('express');
const bodyParser = require('body-parser');
const morganBody = require('morgan-body');
const fs = require('fs');
const path = require('path');
const routes = require('./routes');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(routes);

const log = fs.createWriteStream(path.join(__dirname, './logs', 'status.log'), {
  flag: 'a',
});

morganBody(app, {
  noColors: true,
  stream: log,
});

app.listen(port, () => {
  console.log(`Rodando na porta ${port}`);
});
