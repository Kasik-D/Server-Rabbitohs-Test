const app = require('express')();
const data = require('../db.json');

app.get('/api', (req, res) => {
  res.json(data)
});

module.exports = app;