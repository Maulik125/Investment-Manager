const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

// Import routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/investments', require('./routes/investmentRoutes'));

mongoose.connect(process.env.MONGO_URI, () => {
  console.log('MongoDB connected');
});

app.listen(5000, () => console.log('Server running on port 5000'));
