import express from 'express';
import { json } from 'body-parser';
import morganBody from 'morgan-body';
import { createWriteStream } from 'fs';
import { join } from 'path';
import routes from './routes';
import mongoose from 'mongoose';

require('dotenv').config();

const app = express();

const log = createWriteStream(join(__dirname, './logs', 'status.log'), {
  flag: 'a',
});

morganBody(app, {
  noColors: true,
  stream: log,
});

mongoose.connect(process.env.MONGO_DB_URL, {
  useNewUrlParser: true,
});

app.use(json());
app.use(routes);

app.listen(process.env.PORT, () => {
  console.log(`Rodando na porta ${process.env.PORT}`);
});
