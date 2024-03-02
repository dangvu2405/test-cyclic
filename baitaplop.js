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
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Hello World App</title>
<style>
  body { font-family: Arial, sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; }
  h1 { color: #333; }
</style>
</head>
<body>
  <h1 id="greeting">Hello, World!</h1>
  <script src="app.js"></script>
</body>
</html>

