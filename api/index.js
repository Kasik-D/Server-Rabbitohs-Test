const app = require('express')();
const data = require('../db.json');

app.get('/api', (req, res) => {
  res.send('Hey this is my API running 🥳')
});

app.get('/api/gameDay', (req, res) => {
  res.send('Hey this is my API running 🥳')
});

module.exports = app;