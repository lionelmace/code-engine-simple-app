// app.js
const express = require('express');
const app = express();

// Log function that writes to stderr
function logToStderr(message) {
  console.error(new Date().toISOString() + " - ERROR: " + message);
}

// Simple route
app.get('/', (req, res) => {
  logToStderr("Received a request on '/' route");
  res.send('Hello, World!');
});

// Another route
app.get('/error', (req, res) => {
  logToStderr("Simulated error occurred");
  res.status(500).send('Simulated error');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  logToStderr(`Server started on port ${PORT}`);
});
