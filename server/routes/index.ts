import express from 'express';
import path from 'path';

const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../client/build/index.html'));
})

router.get('/hoho', (req, res) => {
  res.end('hohoho');
})

export default router;