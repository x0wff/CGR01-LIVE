const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // Middleware to parse JSON

// Root route
app.get('/', (req, res) => {
  res.send('CGR01-LIVE backend is running.');
});

// GET route
app.get('/api/data', (req, res) => {
  res.json({
    message: 'Hello from the backend!',
    timestamp: new Date().toISOString()
  });
});

// POST route
app.post('/api/data', (req, res) => {
  const received = req.body;
  res.json({
    message: 'Data received successfully!',
    received: received,
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
