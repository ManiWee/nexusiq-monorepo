const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors()); // Allows our React frontend to communicate with this API
app.use(express.json()); // Allows the API to read JSON data in request bodies

// Health Check Endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ 
    service: 'Core API',
    status: 'Healthy',
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Core API Gateway running on port ${PORT}`);
});