import data from './data/groceries.json' assert { type: 'json' };

import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.redirect('/groceries');
  });

app.get('/groceries', (req, res) => {
    res.json(data);
  });
  
  // Start the server
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });