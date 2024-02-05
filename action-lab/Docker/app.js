const express = require('express');
const app = express();
const port = 8080; // You can choose any available port

// Define a route for the root path
app.get('/', (req, res) => {
  res.send('Hello, Piyapan!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
