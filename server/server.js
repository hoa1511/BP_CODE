require("dotenv").config();
const path = require("path");

const express = require("express");
require('./connection_database');
const cors = require("cors");
const app = express();
const storageRoutes = require('./routes/storageRoutes');

// Cấu hình CORS
app.use(
  cors({
    origin: ['http://localhost:3000', 'http://10.14.84.125:3000'],// Domain front-end của bạn
    credentials: true, // Cho phép gửi cookies và thông tin xác thực
  })
);

app.use(express.json());
app.use('/api/storage', storageRoutes);
// Định nghĩa các route của bạn ở đây
app.use("/api/auth", require("./routes/authRoutes"));
const packingRoutes = require('./routes/packingRoutes'); // Thêm mới
app.use('/api/packing', packingRoutes); // Thêm mới

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));



 
const { fork } = require("child_process");
var obj_tag_value = [];
const tags = require.main.require("./modules/tags_list");
const threadWriteSql_ = fork(
  path.join(__dirname, "modules/db_getDataPlc")
);
threadWriteSql_.on("message", (message) => {
  if (message.event === "socket_io_message_") {
    obj_tag_value = message.data;
    console.log("Data của plc: ", obj_tag_value);
  }
});

