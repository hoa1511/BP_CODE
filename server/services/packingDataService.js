const PackingData = require("../models").PackingData;

// Hàm lấy dữ liệu từ database dựa trên bộ lọc
const getPackingData = async (filters) => {
  const { date, station } = filters;
  const formattedDate = date ? new Date(date).toISOString().split("T")[0] : null;
  const whereClause = {};
  if (formattedDate) whereClause.date = formattedDate;
  if (station) whereClause.station = station;
  // Truy vấn dữ liệu từ cơ sở dữ liệu
  const data = await PackingData.findAll({
    where: whereClause,
    attributes: [
      "chuyen", // Tên chuyền
      "keHoach", // Số kế hoạch
      "dat", // Số đạt chuẩn
      "loi", // Số lỗi
      "tong", // Tổng số thùng
      "chenhLech", // Chênh lệch
      "hieuSuat", // Hiệu suất
    ],
  });

  return data;
};

module.exports = {
  getPackingData,
};
