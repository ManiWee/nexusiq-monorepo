const express = require('express');
const app = express();
const port = 3001;

app.get('/api/health', (req, res) => {
  res.json({ status: 'Core API is running' });
});

app.listen(port, () => {
  console.log(`Core API listening on port ${port}`);
});