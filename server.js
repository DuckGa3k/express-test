require('dotenv').config();
const app = require('./src/app'); // gọi app
// const dbPool = require('./src/config/database'); // kết nối cơ sở dữ liệu

const PORT = 5000;

async function startServer() {
  try {
    // // Thử kết nối kiểm tra Database Pool
    // const connection = await dbPool.getConnection();
    // console.log('Connected to MySQL database pool successfully.');
    // connection.release(); // Trả lại kết nối vào pool

    // Lắng nghe Port
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Failed to connect to MySQL database:', error.message);
    process.exit(1);
  }
}

startServer();