const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

// Route imports
const userRoutes = require('./routes/userRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const { default: mongoose } = require('mongoose');

// Initialize express
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/bookings', bookingRoutes);


mongoose.connect("mongodb://localhost:27017")

const PORT =  8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});