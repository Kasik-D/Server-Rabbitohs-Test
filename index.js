// index.js
const express = require('express')
const data = require('./db.json')

const app = express()
const PORT = 4000

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `)
})

app.get('/', (req, res) => {
  res.send('Hey this is my API running 🥳')
})

app.get('/data', (req, res) => {
  res.json(data)
})

// Export the Express API
module.exports = app