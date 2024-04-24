// Import các module cần thiết
const express = require('express');

// Khởi tạo một router mới từ Express
const router = express.Router();

// Định nghĩa các routes
router.get('/', (req, res) => {
  res.send('Welcome to my website!');
});

router.get('/about', (req, res) => {
  res.send('About page');
});

router.get('/contact', (req, res) => {
  res.send('Contact page');
});

// Export router để có thể sử dụng trong các tệp khác
module.exports = router;