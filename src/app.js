const express = require('express');
const cors = require('cors');
const products = require('./routes/product.route');
const app = express();

// Middleware
app.use(cors()); // Cho phép Flutter kết nối Cross-Origin
app.use(express.json()); // Parse request body dạng JSON
app.use(express.urlencoded({ extended: true }));

// Health check route
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to Credit Scoring & Financial Health API',
    status: 'Running',
  });
});

// Import & register routes (Thêm sau khi viết routes)
// app.use('/api/auth', require('./routes/auth.routes'));

app.use("/api/products", products);

module.exports = app;