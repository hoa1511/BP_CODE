const express = require("express");
require("dotenv").config();

const cors = require("cors");
const app = express();

// Cấu hình CORS
app.use(
  cors({
    origin: "http://localhost:3000", // Domain front-end của bạn
    credentials: true, // Cho phép gửi cookies và thông tin xác thực
  })
);

app.use(express.json());

// Định nghĩa các route của bạn ở đây
app.use("/api/auth", require("./routes/authRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
