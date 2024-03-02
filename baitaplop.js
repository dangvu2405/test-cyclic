const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

// Trang chủ
app.get('/', (req, res) => {
  res.send('Xin chào từ ứng dụng cloud của bạn!');
});

// Khởi động server
app.listen(port, () => {
  console.log(`Ứng dụng đang chạy trên cổng ${port}`);
});
