import express from 'express';
import path from 'path';

const app = express();

app.set('PORT', 5000);

app.get('/', (req, res) => {
  console.log('hahaha');
  res.sendFile(path.resolve(__dirname, '../../client/build/index.html'));
})

app.listen(app.get('PORT'), () => {
  console.log('express server is running on port ' + app.get('PORT'));
})