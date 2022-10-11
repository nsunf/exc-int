import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(express.static(path.resolve(__dirname, '../../client/build')));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../client/build/index.html'));
})

app.listen(process.env.PORT, () => {
  console.log('express server is running on port ' + process.env.PORT);
})