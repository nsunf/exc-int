import express from 'express';
import path from 'path';
import dotenv from 'dotenv';

import indexRouter from './routes/index';
import apiRouter from './routes/api';

dotenv.config();

const app = express();

app.use(express.static(path.resolve(__dirname, '../../client/build')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);
app.use('/api', apiRouter);

app.listen(process.env.PORT, () => {
  console.log('express server is running on port ' + process.env.PORT);
})