const app = require('./app')

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

// Trang chủ
app.get('/', (req, res) => {
  res.send('Xin chào từ ứng dụng cloud của bạn!');
});

// Khởi động server
app.listen(port, () => {
  console.log(`Ứng dụng đang chạy trên cổng ${port}`);
});
