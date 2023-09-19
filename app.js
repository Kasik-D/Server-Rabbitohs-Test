const express = require('express');
const cors = require('cors');
// const jsonServer = require('json-server');
const data = require('./db.json');  // Load the data

// Create an Express app
const app = express();
const port = 3001; // You can choose any port you prefer

// Enable CORS
app.use(cors({
    origin: '*',
}));

// JSON Server
// const jsonServerRouter = jsonServer.router('db.json');
// app.use('/api', jsonServerRouter);

// Start the server
const server = app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.get('/', (req, res) => {
  res.send('Hey this is my API running 🥳')
})

app.get('/api/gameDay', (req, res) => {
  res.send(data)
})

// Export the Express API
module.exports = app