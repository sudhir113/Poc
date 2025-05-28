const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect to MongoDB
connectDB();

app.use(express.json()); // Middleware to parse JSON

// Define Routes
app.use('/api/transactions', require('./routes/transactions')); // Mount transaction routes

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server listening at http://localhost:${port}`));
