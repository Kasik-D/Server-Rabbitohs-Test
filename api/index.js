const app = require('express')();
const data = require('./data.json');

app.get('/api', (req, res) => {
  res.send('Hey this is my API running 🥳')
});

app.get('/api/gameDay', (req, res) => {
  res.end(data);
});

module.exports = app;